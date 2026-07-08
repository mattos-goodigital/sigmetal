## Objetivo
Substituir todas as ocorrências da cor de destaque `amber` (laranja/dourado) pela cor `red` (vermelho) em `src/routes/index.tsx`.

## Onde a cor está presente
A cor `amber` é usada como destaque em ~60 pontos do arquivo, incluindo:
- **Navbar:** logo, links hover, botão "Orçamento"
- **Hero:** badge, headline, botão CTA, sombra
- **Stats:** números
- **Sobre:** labels, ícones, cards hover
- **Serviços (Quem Somos):** labels, ícones, cards hover e sombra
- **Projetos:** labels, badges de categoria
- **Contato:** label, ícones de info, botão enviar, inputs focus
- **Footer:** logo, links hover

## Mapeamento de cores
```
amber-400  → red-400
amber-500  → red-500
amber-600  → red-600
amber-500/5   → red-500/5
amber-500/10  → red-500/10
amber-500/20  → red-500/20
amber-500/30  → red-500/30
amber-500/40  → red-500/40
```

## Validação
Após a substituição global, verificar o preview para confirmar que os elementos de destaque (botões, ícones, textos, bordas e sombras) aparecem em vermelho em todas as seções.