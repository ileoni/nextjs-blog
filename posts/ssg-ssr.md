---
title: 'Quando usar geração estática v.s. Renderização do lado do servidor'
date: '2020-01-02'
---

Recomendamos o uso de **geração estática** (com e sem dados) sempre que possível, pois sua página pode ser criada uma vez e servida por CDN, o que a torna muito mais rápida do que ter um servidor renderizando a página a cada solicitação.

Você pode usar a geração estática para muitos tipos de páginas, incluindo:

- páginas de marketing
- Postagens no blog
- Listas de produtos de comércio eletrônico
- Ajuda e documentação

Você deve se perguntar: "Posso pré-renderizar esta página **antes** da solicitação de um usuário?" Se a resposta for sim, então você deve escolher Geração Estática.

Por outro lado, a geração estática **não** é uma boa ideia se você não puder pré-renderizar uma página antes da solicitação do usuário. Talvez sua página mostre dados atualizados com frequência e o conteúdo da página mude a cada solicitação.

Nesse caso, você pode usar **Renderização no lado do servidor**. Será mais lento, mas a página pré-renderizada estará sempre atualizada. Ou você pode pular a pré-renderização e usar o JavaScript do lado do cliente para preencher os dados.