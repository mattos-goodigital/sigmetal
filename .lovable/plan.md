Adicionar um terceiro botão "Vistoria" ao lado de "Solicitar Orçamento" e "Ver Projetos" na seção hero de `src/routes/index.tsx`.

**Estilo**: Variante outline discreta (borda branca/zinc, fundo transparente, hover com fundo branco translúcido) para não competir com o CTA vermelho principal.

**Comportamento**: Ao clicar, rola até a seção de contato (`#contato`) — mesma âncora usada por "Solicitar Orçamento" — mas com foco em agendar vistoria. Alternativa: abrir WhatsApp direto se preferir.

**Arquivo**: `src/routes/index.tsx` (bloco de botões do hero, ~linha 186).