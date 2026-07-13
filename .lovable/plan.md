# Plano: Carrossel de logos na seção Sobre

## Objetivo
Adicionar, dentro da seção `#sobre` (AboutSection), um subtítulo `h2` com o texto **"Empresas que confiam na Sigmetal"** e, abaixo, um carrossel automático e contínuo com **12 logos** de empresas parceiras.

## O que será feito

### 1. Estrutura na seção Sobre
- Inserir o novo bloco **após** o conteúdo textual e imagem atual da `AboutSection`, ainda dentro do `max-w-7xl` da seção.
- O bloco conterá:
  - Um `h2` centralizado com o texto solicitado.
  - O componente de carrossel logo abaixo.

### 2. Componente `LogoCarousel`
- Criar um componente interno (no mesmo arquivo `src/routes/index.tsx`) chamado `LogoCarousel`.
- Receber uma lista de 12 empresas como array de objetos (`name`, opcionalmente `logo` para futura substituição).
- Como o usuário optou por **placeholders**, cada item será renderizado como um card estilizado com as iniciais/nome da empresa, usando o tema atual (fundo zinc-900, borda zinc-800, destaque vermelho).

### 3. Animação automática e contínua
- Implementar animação CSS pura (`@keyframes`) para movimento horizontal infinito da trilha de logos.
- A trilha será duplicada para criar efeito de loop contínuo sem "pulos" visíveis.
- Velocidade suave e pausa ao passar o mouse (`hover:pause`).
- Garantir que a animação funcione em mobile e desktop.

### 4. Responsividade e acessibilidade
- Logos com tamanho consistente (largura fixa, altura uniforme).
- Espaçamento adequado entre os itens.
- Adicionar `prefers-reduced-motion` para respeitar usuários com sensibilidade a movimento.
- Manter o contraste e a identidade visual da página (escuro + vermelho).

### 5. Dados placeholder
- Lista com 12 nomes fictícios de empresas industriais/parceiras, por exemplo:
  1. MetalBras
  2. Indústrias Silva
  3. Construtora Horizonte
  4. Grupo Ferraz
  5. Engenharia Norte
  6. Aço & Cia
  7. Shopping Centro-Oeste
  8. Logística Pesada
  9. Portos do Brasil
  10. Mineração Atlas
  11. Indústria Alimentícia Prima
  12. Tecnometal

## Arquivos afetados
- `src/routes/index.tsx`: adicionar o componente `LogoCarousel` e inserir o novo bloco na `AboutSection`.
- `src/styles.css`: adicionar a regra `@keyframes` para a animação do carrossel.

## Resultado esperado
A seção Sobre ganhará um novo bloco com o título "Empresas que confiam na Sigmetal" e uma faixa de logos deslizando suavemente para a esquerda de forma contínua, mantendo o visual industrial escuro da página.