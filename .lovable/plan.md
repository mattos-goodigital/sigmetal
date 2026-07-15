# Plano: Portfólio por Categorias com Lightbox

## Objetivo
Transformar a seção "Projetos Realizados" em uma galeria de fotos dividida em 2 categorias — **Proteção de Máquinas NR12** e **Serralheria Industrial** — permitindo abrir cada foto ampliada em um lightbox.

## Decisões tomadas com base nas respostas
- Categorias: Proteção de Máquinas NR12 / Serralheria Industrial
- Fotos: placeholders por enquanto (substituídas depois pelo usuário)
- Interação: lightbox ao clicar na foto

## O que será feito

1. **Estrutura do portfólio**
   - Substituir o grid atual de cards (com título, local e overlay) por uma galeria limpa de apenas fotos.
   - Adicionar botões de filtro/tab para alternar entre as 2 categorias.
   - Manter o ID `projetos` para não quebrar a navegação do menu.

2. **Galeria de fotos**
   - Exibir as fotos de cada categoria em grid responsivo (mobile 1 coluna, tablet 2, desktop 3).
   - Cada foto será um card clicável com leve escala no hover.
   - Usar placeholders baseados na imagem do hero (`banner-site-sigmetal.jpg`) enquanto o usuário não envia as fotos reais.

3. **Lightbox**
   - Criar um componente de lightbox que abre a imagem ampliada ao centro da tela.
   - Incluir botão de fechar (X), navegação entre fotas da categoria ativa (setas esquerda/direita) e fechar ao clicar no fundo escuro.
   - Aplicar o mesmo tema escuro da página (fundo zinc-950/95, bordas zinc-800, destaque vermelho).

4. **Ajustes visuais**
   - Manter o título "Projetos Realizados" e o subtítulo "Portfólio".
   - Garantir que o H1 do hero não seja afetado.

## Arquivos afetados
- `src/routes/index.tsx` — refatorar `ProjectsSection` e adicionar o componente `Lightbox`.

## Resultado esperado
A seção de portfólio exibe apenas fotos, separadas por abas das 2 categorias. O usuário pode clicar em qualquer foto para vê-la ampliada e navegar entre as fotos daquela categoria.