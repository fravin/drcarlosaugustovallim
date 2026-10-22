# Conferir a assinatura da Nexum no rodapé

## O que será verificado
Nas 7 páginas (página principal + 6 páginas de tratamentos), no computador (1280px) e no celular (390px):
1. O texto "Desenvolvido por Nexum Tecnologia" aparece no rodapé.
2. O logo da Nexum carrega de fato (sem imagem quebrada) e no tamanho certo.
3. No celular, o crédito não fica cortado, não sai da tela e continua fácil de tocar.
4. O link aponta para https://www.nexumtec.com.br/ e abre em nova aba; clicar nele abre o site da Nexum.

## Como
- Rodar um teste automático no navegador em cada página e tamanho de tela, com foto do rodapé de cada uma.
- Se algo falhar (logo ausente, quebra no celular, link errado), corrigir apenas o rodapé e repetir o teste.

## Resultado
Resumo curto com o que passou e as fotos do rodapé no computador e no celular.

## Detalhes técnicos
- Playwright em /tmp/browser/nexum/, viewports 1280x1800 e 390x844.
- Checar `.nexum-credit` visível, `img.naturalWidth > 0`, `href`, `target=_blank`, `rel=noopener`, ausência de overflow horizontal; clique com `expect_popup` e confirmar URL da nova aba em nexumtec.com.br.
- Correções, se necessárias, em `src/treatment.css`, `src/components/TreatmentPage.tsx` ou `src/routes/index.tsx`.
