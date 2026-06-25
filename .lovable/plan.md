## Problema

Quando o link é colado no WhatsApp, Telegram, Instagram, LinkedIn, e-mail etc., o preview mostra só título e descrição — sem foto. Motivo: a página não tem nenhuma tag `og:image` / `twitter:image`. A foto do médico hoje está embutida em base64 dentro do HTML do hero, então os crawlers (WhatsApp, Facebook) não conseguem descobri-la nem usá-la como preview.

Além disso, o domínio dentro de `og:url` / `canonical` ainda aponta para `my-sweet-site-publish.lovable.app`, mas a URL publicada real é `drcarlosaugustovallim.lovable.app` — isso atrapalha o cache dos previews.

## Plano

1. **Gerar uma imagem social dedicada (1200×630, JPG)** — formato exigido por WhatsApp/Facebook/LinkedIn/X para preview "grande". Conteúdo:
   - Foto do Dr. Carlos à esquerda (recortada do hero atual).
   - À direita, em fundo na paleta do site: nome, "Ortopedista · Especialista em Joelho", CRM-RJ 47514-1 e "Rio de Janeiro".
   - Salva em `public/og-dr-carlos-vallim.jpg` (servida em `/og-dr-carlos-vallim.jpg`, URL absoluta).

2. **Adicionar tags Open Graph e Twitter Card em `src/routes/index.tsx`:**
   - `og:image`, `og:image:secure_url` → URL absoluta do JPG
   - `og:image:type` = `image/jpeg`
   - `og:image:width` = 1200, `og:image:height` = 630
   - `og:image:alt` = "Dr. Carlos Augusto Vallim Rosa — Ortopedista Especialista em Joelho"
   - Trocar `twitter:card` de `summary` para `summary_large_image` e adicionar `twitter:image` + `twitter:image:alt`.

3. **Corrigir o domínio base** em `src/routes/index.tsx` e `src/routes/sitemap[.]xml.ts`:
   - `SITE_URL` / `BASE_URL` passa a ser `https://drcarlosaugustovallim.lovable.app` (URL publicada real).
   - Atualizar `canonical`, `og:url`, JSON-LD `Physician.url` e `Sitemap:` em `public/robots.txt` para o mesmo domínio.

4. **Republicar** para o preview novo entrar no ar.

5. **Forçar o WhatsApp/Facebook a re-baixar o preview** (eles cacheiam por dias):
   - WhatsApp: o cache do preview é por URL — passar a URL com um sufixo único uma vez (ex.: `?v=2`) força refetch. Ou aguardar ~7 dias.
   - Facebook/Instagram: usar o [Sharing Debugger](https://developers.facebook.com/tools/debug/) → "Scrape Again".
   - LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/) → "Inspect".
   - Telegram: enviar para `@WebpageBot` o link para limpar o cache.

## Detalhes técnicos

- Vou extrair o base64 da `<img class="hero-photo">` em `src/landing-body.html`, decodificar para um JPG, e usar o ImageMagick (via `nix run nixpkgs#imagemagick`) para compor o card 1200×630 com a foto + texto na paleta atual (`--primary` do projeto). Se o resultado não ficar bom, gero via `imagegen` modelo `premium` para garantir tipografia legível.
- Mantenho a `<img>` inline em base64 no hero (não é o gargalo aqui) — não precisa duplicar o asset.
- O `og:image` precisa ser **URL absoluta com https** — relativos quebram no WhatsApp.

## Arquivos alterados

- `public/og-dr-carlos-vallim.jpg` (novo)
- `src/routes/index.tsx` (meta tags + SITE_URL)
- `src/routes/sitemap[.]xml.ts` (BASE_URL)
- `public/robots.txt` (linha Sitemap)
