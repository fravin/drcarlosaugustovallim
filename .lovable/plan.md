## Objetivo
Criar uma rotina automatizada que valide as meta tags Open Graph e a imagem de compartilhamento (`og:image`) do site, simulando o que o crawler do WhatsApp faz ao gerar o preview de um link.

## Como o WhatsApp lê um link
O WhatsApp envia um `GET` com `User-Agent: WhatsApp/2.x` ao HTML da página e lê apenas as tags dentro do `<head>`:
- `og:title`, `og:description`, `og:url`, `og:image` (precisa ser URL absoluta HTTPS, acessível sem login)
- A imagem precisa ter `Content-Type: image/jpeg|png`, tamanho < 300 KB recomendado, dimensões >= 300×200 (ideal 1200×630).

## O que a rotina vai verificar
Script Node em `scripts/check-og.mjs` que recebe uma URL (default `https://drcarlosaugustovallim.lovable.app`) e:

1. Faz `fetch` do HTML com `User-Agent` do WhatsApp.
2. Extrai com regex/`cheerio` todas as meta tags `og:*` e `twitter:*`, mais `<title>`, `<meta name="description">` e `<link rel="canonical">`.
3. Valida obrigatórios: `og:title`, `og:description`, `og:url`, `og:image`, `og:image:width`, `og:image:height`, `twitter:card=summary_large_image`, `twitter:image`.
4. Garante que `og:url` e `canonical` apontam para o domínio canônico (`drcarlosaugustovallim.lovable.app`).
5. Faz `HEAD` (e `GET` parcial fallback) na URL do `og:image`:
   - status 200
   - `content-type` começa com `image/`
   - `content-length` <= 5 MB (limite WhatsApp) e idealmente <= 300 KB
6. Baixa a imagem e confere dimensões reais via cabeçalho JPEG/PNG (sem dependência nativa — leitura de bytes).
7. Imprime um relatório `PASS/FAIL` por checagem e sai com código != 0 em caso de falha (para uso futuro em CI).

## Script `package.json`
Adicionar:
```
"check:og": "node scripts/check-og.mjs"
```
Uso: `bun run check:og` (verifica produção) ou `bun run check:og http://localhost:8080` (verifica preview local).

## Execução e validação manual complementar
Após rodar o script, instruções no output apontam para os debuggers oficiais para confirmação visual:
- Facebook Sharing Debugger (mesmo parser do WhatsApp Business): https://developers.facebook.com/tools/debug/
- Telegram `@WebpageBot` (similar)
- WhatsApp: enviar `https://drcarlosaugustovallim.lovable.app/?v=N` para invalidar cache

## Entregáveis
1. `scripts/check-og.mjs` — validador (sem dependências novas; usa `fetch` nativo).
2. Entrada `check:og` em `package.json`.
3. Execução do script contra a URL publicada após o build e cole do relatório na resposta.

## Fora de escopo
- Não envia mensagens reais ao WhatsApp (API requer Business + número verificado).
- Não altera meta tags existentes — apenas valida.
