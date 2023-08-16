---
title: 'Duas formas de pré-renderização'
date: '2020-01-01'
---

O Next.js tem duas formas de pré-renderização: **Geração estática** e **Renderização do lado do servidor**. A diferença está em **quando** ele gera o HTML para uma página.

- **Geração estática** é o método de pré-renderização que gera o HTML no **tempo de construção**. O HTML pré-renderizado é _reutilizado_ em cada solicitação.
- **Server-side Rendering** é o método de pré-renderização que gera o HTML em **cada solicitação**.

É importante ressaltar que o Next.js permite **escolher** qual formulário de pré-renderização usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando geração estática para a maioria das páginas e renderização do lado do servidor para outras.