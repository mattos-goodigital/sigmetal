Remover o card "Equipe Qualificada / Soldadores certificados" da seção Sobre (AboutSection).

O card está localizado na seção `#sobre`, sobreposto à imagem do lado direito. A alteração consiste em excluir o elemento `div` absoluto (linhas aproximadas 287–297) que contém o ícone `HardHat`, o título "Equipe Qualificada" e o subtítulo "Soldadores certificados".

Arquivo afetado: `src/routes/index.tsx`.
Nenhuma outra mudança necessária.