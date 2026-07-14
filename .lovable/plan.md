# Plano: Trocar foto do hero

## Objetivo
Substituir a imagem de fundo da seção hero (`/hero-serralheria.jpg`) pela foto enviada (`banner-site-sigmetal.jpg`), mantendo o mesmo efeito de overlay escuro e o posicionamento atual.

## O que será feito

1. **Upload da nova imagem para o CDN**
   - Usar o CLI `lovable-assets` para fazer upload de `user-uploads://banner-site-sigmetal.jpg`.
   - Gerar o ponteiro em `src/assets/banner-site-sigmetal.jpg.asset.json`.

2. **Atualizar o hero**
   - Em `src/routes/index.tsx`, trocar o `src` da imagem do hero (linha 161) de `/hero-serralheria.jpg` para a URL do asset gerado.
   - Importar o ponteiro do asset no topo do arquivo.

3. **Limpar arquivo antigo**
   - Remover `public/hero-serralheria.jpg` para evitar asset órfão no repositório.

## Arquivos afetados
- `src/routes/index.tsx` — atualizar src da imagem do hero.
- `src/assets/banner-site-sigmetal.jpg.asset.json` — novo ponteiro de asset.
- `public/hero-serralheria.jpg` — remoção.

## Resultado esperado
O hero exibirá a nova foto de soldagem enviada, com o mesmo tratamento visual escuro e o texto centralizado por cima.