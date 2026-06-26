#!/usr/bin/env node
/**
 * check-og.mjs — Simula o crawler do WhatsApp/Facebook e valida as
 * meta tags Open Graph + a imagem de compartilhamento de uma URL.
 *
 * Uso:
 *   node scripts/check-og.mjs                          # produção
 *   node scripts/check-og.mjs http://localhost:8080    # preview local
 */

const TARGET = process.argv[2] || "https://drcarlosaugustovallim.lovable.app";
const CANONICAL_HOST = "drcarlosaugustovallim.lovable.app";
const WA_UA =
  "WhatsApp/2.23.20.0 A"; // user-agent que o crawler do WA usa

const results = [];
const record = (name, ok, detail = "") =>
  results.push({ name, ok, detail });

function parseMeta(html) {
  const tags = {};
  const re = /<meta\s+([^>]+?)\/?>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = {};
    const ar = /(\w[\w:-]*)\s*=\s*"([^"]*)"/g;
    let a;
    while ((a = ar.exec(m[1]))) attrs[a[1].toLowerCase()] = a[2];
    const key = attrs.property || attrs.name;
    if (key && attrs.content !== undefined) tags[key.toLowerCase()] = attrs.content;
  }
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1];
  const canonical = (html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [])[0];
  const canonicalHref = canonical
    ? (canonical.match(/href=["']([^"']+)["']/i) || [])[1]
    : undefined;
  return { tags, title, canonicalHref };
}

// dimensões a partir dos primeiros bytes (JPEG/PNG)
function readDimensions(buf) {
  // PNG: 8-byte signature, then IHDR with width/height big-endian
  if (
    buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47
  ) {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20), type: "png" };
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) return null;
      const marker = buf[i + 1];
      const size = buf.readUInt16BE(i + 2);
      // SOF markers
      if (
        (marker >= 0xc0 && marker <= 0xc3) ||
        (marker >= 0xc5 && marker <= 0xc7) ||
        (marker >= 0xc9 && marker <= 0xcb) ||
        (marker >= 0xcd && marker <= 0xcf)
      ) {
        return {
          h: buf.readUInt16BE(i + 5),
          w: buf.readUInt16BE(i + 7),
          type: "jpeg",
        };
      }
      i += 2 + size;
    }
  }
  return null;
}

async function main() {
  console.log(`\n🔍 Verificando preview de compartilhamento para: ${TARGET}\n`);

  let html;
  try {
    const res = await fetch(TARGET, {
      headers: { "User-Agent": WA_UA, Accept: "text/html" },
      redirect: "follow",
    });
    record("HTML acessível (200)", res.ok, `status ${res.status}`);
    html = await res.text();
  } catch (e) {
    record("HTML acessível", false, e.message);
    return report();
  }

  const { tags, title, canonicalHref } = parseMeta(html);

  // obrigatórios
  const required = [
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "og:type",
  ];
  for (const k of required) {
    record(`Tag ${k} presente`, !!tags[k], tags[k] || "ausente");
  }
  record("Tag <title> presente", !!title, title || "ausente");
  record(
    "Twitter card = summary_large_image",
    tags["twitter:card"] === "summary_large_image",
    tags["twitter:card"] || "ausente",
  );
  record("Tag twitter:image presente", !!tags["twitter:image"], tags["twitter:image"] || "ausente");

  // canonical / og:url no domínio certo
  if (tags["og:url"]) {
    record(
      "og:url aponta para o domínio canônico",
      tags["og:url"].includes(CANONICAL_HOST),
      tags["og:url"],
    );
  }
  if (canonicalHref) {
    record(
      "canonical aponta para o domínio canônico",
      canonicalHref.includes(CANONICAL_HOST),
      canonicalHref,
    );
  } else {
    record("link rel=canonical presente", false, "ausente");
  }

  // dimensões anunciadas
  const w = parseInt(tags["og:image:width"] || "0", 10);
  const h = parseInt(tags["og:image:height"] || "0", 10);
  record(
    "og:image:width/height declarados (ideal 1200×630)",
    w >= 600 && h >= 315,
    `${w}×${h}`,
  );

  // validar a imagem
  const imgUrl = tags["og:image"];
  if (imgUrl) {
    try {
      const abs = new URL(imgUrl, TARGET).toString();
      record("og:image é URL absoluta HTTPS", abs.startsWith("https://"), abs);

      const imgRes = await fetch(abs, { headers: { "User-Agent": WA_UA } });
      record(`og:image acessível (200)`, imgRes.ok, `status ${imgRes.status}`);

      const ct = imgRes.headers.get("content-type") || "";
      record("og:image Content-Type image/*", ct.startsWith("image/"), ct);

      const buf = Buffer.from(await imgRes.arrayBuffer());
      const sizeKB = (buf.length / 1024).toFixed(1);
      record(
        "og:image <= 5 MB (limite WhatsApp)",
        buf.length <= 5 * 1024 * 1024,
        `${sizeKB} KB`,
      );
      record(
        "og:image <= 300 KB (recomendado p/ preview rápido)",
        buf.length <= 300 * 1024,
        `${sizeKB} KB`,
      );

      const dim = readDimensions(buf);
      if (dim) {
        record(
          `Dimensões reais ${dim.w}×${dim.h} (mín 300×200; ideal 1200×630)`,
          dim.w >= 300 && dim.h >= 200,
          `${dim.type}`,
        );
        if (w && h) {
          record(
            "Dimensões declaradas batem com o arquivo",
            dim.w === w && dim.h === h,
            `declarado ${w}×${h}, real ${dim.w}×${dim.h}`,
          );
        }
      } else {
        record("Dimensões legíveis (JPEG/PNG)", false, "formato não reconhecido");
      }
    } catch (e) {
      record("Validação da og:image", false, e.message);
    }
  }

  report();
}

function report() {
  console.log("Resultado:");
  let fails = 0;
  for (const r of results) {
    const icon = r.ok ? "✅" : "❌";
    if (!r.ok) fails++;
    console.log(`  ${icon} ${r.name}${r.detail ? ` — ${r.detail}` : ""}`);
  }
  console.log(
    `\n${fails === 0 ? "🎉 Tudo OK" : `⚠️  ${fails} verificação(ões) falharam`}.`,
  );
  console.log(
    "\nValidação visual recomendada (cache de previews):\n" +
      "  • Facebook (mesmo parser do WhatsApp): https://developers.facebook.com/tools/debug/\n" +
      "  • LinkedIn: https://www.linkedin.com/post-inspector/\n" +
      "  • Telegram: envie o link para @WebpageBot\n" +
      "  • WhatsApp: envie o link com sufixo único, ex. ?v=2, para invalidar o cache.\n",
  );
  process.exit(fails === 0 ? 0 : 1);
}

main();
