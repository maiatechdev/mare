---
name: M.A.R.É
description: Livro de Registro da Colônia. Cada relato vira um lançamento numerado e carimbado.
colors:
  papel: "#F5F8F6"
  papel-2: "#FFFFFF"
  pauta: "#DDEBE7"
  margem: "#C7362C"
  tinta: "#13221E"
  tinta-2: "#4A5D57"
  linha: "#C3D6D0"
  carimbo: "#1E3F7F"
  boia: "#D9530F"
  boia-texto: "#A8400B"
  boia-suave: "#FBE3D5"
  capa: "#0F2A25"
  capa-pauta: "#1C3E37"
  capa-texto: "#E6EFEB"
  capa-texto-2: "#A3D6C4"
  capa-carimbo: "#A9C4F5"
  capa-boia: "#FF8B4D"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  figure:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.8rem, 2rem + 3vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
    fontFeature: "lnum"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.2vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0em"
    fontVariation: "'wdth' 75"
  stamp:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 75"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Courier Prime, Courier New, ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  tarja: "1px"
  folha: "4px"
  carimbo: "5px"
  botao: "6px"
  redondo: "50%"
spacing:
  linha-pauta: "32px"
  gut-mobile: "16px"
  gut-tablet: "40px"
  gut-desktop: "72px"
  cab: "48px"
  grade-sm: "40px"
  grade-lg: "64px"
  secao: "96px"
  secao-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.boia}"
    typography: "{typography.body}"
    rounded: "{rounded.botao}"
    padding: "12px 22px"
    height: "52px"
  button-primary-capa:
    backgroundColor: "{colors.capa-boia}"
    textColor: "#1A0D05"
    typography: "{typography.body}"
    rounded: "{rounded.botao}"
    padding: "12px 22px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.botao}"
    padding: "12px 22px"
    height: "52px"
  stamp:
    textColor: "{colors.carimbo}"
    typography: "{typography.stamp}"
    rounded: "{rounded.carimbo}"
    padding: "0.42em 0.6em 0.36em"
  stamp-laranja:
    textColor: "{colors.boia-texto}"
    typography: "{typography.stamp}"
    rounded: "{rounded.carimbo}"
    padding: "0.42em 0.6em 0.36em"
  ficha:
    backgroundColor: "{colors.papel-2}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.folha}"
    padding: "20px 20px 18px 30px"
  nota:
    backgroundColor: "{colors.boia-suave}"
    textColor: "{colors.boia-texto}"
    typography: "{typography.label}"
    rounded: "{rounded.folha}"
    padding: "2px 7px"
  theme-toggle:
    backgroundColor: "{colors.papel-2}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.botao}"
    size: "44px"
---

# Design System: M.A.R.É

## Overview

**Creative North Star: "O Livro de Registro da Colônia"**

A página inteira é uma folha do livro de registro de uma colônia de pescadores: papel branco frio pautado em verde-água claro, uma única margem vermelha que desce por todas as seções, e capas no verde-preto do livro ata separando os capítulos. Cada relato vira um lançamento: tem número de protocolo datilografado, campos com rótulo, fonte escrita embaixo de cada número e carimbos levemente tortos que confirmam o que foi conferido. É o "R" de M.A.R.É transformado em objeto físico.

A densidade é a de um livro de escrituração: listas em linhas pautadas separadas por fios finos, uma borda superior de 2px abrindo cada registro, números grandes condensados com a fonte em máquina de escrever ao lado. Nada de grade de cards iguais; as informações são lançamentos em linha. A profundidade é de papel sobre mesa, nunca de painel flutuante. O estado se lê pela forma do traço: linha cheia é feito, linha tracejada é planejado, e o que ainda não existe aparece como uma linha pautada em branco, nunca como texto inventado.

O movimento é escasso e tem um só número principal: na abertura, a conversa simulada de WhatsApp preenche a ficha "Registro nº 0142" e os carimbos batem nela em sequência. A animação só liga com JS e com movimento permitido, tem botão de pausa, e sem ela tudo aparece estático e completo.

**Key Characteristics:**
- Papel branco frio pautado (linha a cada 32px), nunca creme.
- Uma margem vermelha vertical, a única régua decorativa da página.
- Três tintas: papel, azul de carimbo, laranja de boia.
- Letra de carimbo condensada (Archivo, largura 75) para títulos e números; máquina de escrever (Courier Prime) para protocolos, rótulos e fontes; Atkinson Hyperlegible Next para leitura.
- Carimbos girados com tinta irregular (máscara de ruído).
- Feito = traço cheio; planejado = traço tracejado; ausente = linha pautada vazia.
- Capas escuras no verde do livro ata para capítulos de processo e trajetória.

## Colors

Uma paleta de papel e duas tintas de carimbo, com o verde-preto da capa como o único campo escuro.

### Primary
- **Azul de Carimbo** (carimbo): a tinta da prova. Carimbos, números grandes do livro (valores, camadas), a ênfase no h1, ícones de confirmação na tabela e anéis de ícone. Em capa vira **Azul de Carimbo sobre Capa** (capa-carimbo).

### Secondary
- **Laranja de Boia** (boia): o sinal de ação e de destaque. Fundo do botão cheio, foco, sublinhado do menu, pinos e trilhos de etapas concluídas (capa-boia na capa), carimbo de destaque e a coluna "nós" da tabela (a 10%).
- **Laranja de Boia para Texto** (boia-texto): a versão escura usada sempre que o laranja é texto sobre papel (somas, valor SOM, cabeçalho da coluna "nós", notas).
- **Boia Suave** (boia-suave): fundo das notas datilografadas dentro da conversa.

### Tertiary
- **Margem Vermelha** (margem): exclusivamente a régua vertical de 2px, a 75% de opacidade, que atravessa o `main` na calha esquerda. Não é cor de texto, nem de alerta, nem de botão.

### Neutral
- **Papel** (papel): fundo da página, com pauta repetida.
- **Papel de Ficha** (papel-2): fichas, quadro de conta, botão de tema; a folha solta sobre o livro.
- **Pauta** (pauta): as linhas horizontais do papel, a cada 32px no corpo e 28px na ficha.
- **Tinta** (tinta): texto principal e a borda superior de 2px que abre cada livro de lançamentos.
- **Tinta Clara** (tinta-2): subtítulos, legendas, fontes, rótulos de campo.
- **Fio** (linha): separadores de 1px entre lançamentos, margem interna das fichas, bordas da topbar.
- **Capa** (capa), **Pauta da Capa** (capa-pauta), **Texto da Capa** (capa-texto) e **Texto Claro da Capa** (capa-texto-2): as bandas escuras. Dentro de uma capa, os tokens de tinta, fio, carimbo e boia são redefinidos localmente para as versões de capa; o fio da capa é #2A4C44.

**Modo escuro:** removido. O site tem só o tema claro, sem alternador.

### Named Rules
**A Regra das Três Tintas.** Papel, azul de carimbo e laranja de boia. Não entra uma quarta cor de acento; a margem vermelha é régua, não tinta.

**A Regra do Laranja Legível.** Laranja como texto sobre papel usa boia-texto (5.77:1); boia puro fica para fundos, traços, pinos e foco. Sobre capa, capa-boia serve como texto (6.57:1).

**A Regra da Capa Autocontida.** Uma banda de capa redefine tinta, tinta-2, linha, carimbo e boia para as suas versões de capa; componentes dentro dela não escolhem cores próprias.

## Typography

**Display Font:** Archivo, largura 75, pesos 500 e 600 (com Arial Narrow)
**Body Font:** Atkinson Hyperlegible Next, 400 e 500 (com Segoe UI, system-ui)
**Label/Mono Font:** Courier Prime (com Courier New, ui-monospace)

**Character:** Letra de carimbo condensada encontra máquina de escrever de cartório; a leitura corrida fica com uma sans feita para legibilidade máxima, porque quem lê também está no celular, na praia.

### Hierarchy
- **Display** (600, clamp 2.5rem a 4rem, 0.98): só o h1 da abertura, no máximo três linhas, com `text-wrap: balance`.
- **Figure** (600, clamp 2.8rem a 4.6rem, 0.95, algarismos de linha): os valores do livro de lançamentos, em azul de carimbo, com a unidade em `small` (clamp 1.4rem a 2.3rem).
- **Headline** (600, clamp 2.1rem a 3.4rem, 1): h2 de cada seção.
- **Title** (500, 1.45rem, 1.1): h3 de partes, etapas e passos (1.6rem nos passos).
- **Stamp** (600, maiúsculas, 0.05em): carimbos; 0.86rem dentro da ficha, cerca de 0.9rem a 1rem nas seções, 1.25rem no carimbo grande da ficha, até clamp 3rem a 5.6rem no carimbo de prêmio.
- **Lead** (400, 1.1875rem, 1.55): subtítulo da abertura, máx. 36rem. Subtítulos de seção usam 1.125rem, máx. 60ch.
- **Body** (400, 1.0625rem, 1.6): texto corrido; parágrafos de lançamento limitados entre 30ch e 46ch.
- **Label** (Courier Prime 400, 0.72rem a 0.9rem): números de protocolo, "nº 1" a "nº 5", datas de etapa, rótulos de campo (maiúsculas, 0.72rem), fontes dos números (0.82rem), valores de conta, e-mail.

### Named Rules
**A Regra da Fonte Datilografada.** Todo número tem a sua fonte em Courier Prime logo ao lado ou abaixo, em tinta-2. Número sem fonte não entra no livro.

**A Regra da Largura 75.** Archivo aparece sempre com `font-stretch: 75%`; nunca na largura normal. Só os pesos 500 e 600 são carregados.

## Layout

Coluna única centralizada com largura `min(100% - 2 × gut, 1200px)`; a calha (gut) cresce de 16px a 40px (≥640px) e 72px (≥1024px). A margem vermelha fica no meio da calha esquerda, `max(5px, ...)`, e atravessa o `main` inteiro por cima das seções.

O ritmo vertical é a pauta de 32px. Seções têm 96px de respiro vertical (128px a partir de 1024px); seções de papel consecutivas zeram o padding superior para que o livro continue sem quebra. Cabeçalhos de seção (h2 + subtítulo, gap de 16px, máx. 46rem) ficam 48px acima do conteúdo. Grades em duas colunas assimétricas (6/5, 5/6, 7/5, 1.08/1) com gap de 40px no celular e 64px no desktop.

Lançamentos empilham no celular e viram linha de três colunas (4/5/3) a partir de 860px; partes viram três colunas com fio vertical entre elas a 860px; passos e etapas viram cinco colunas com o trilho horizontal a 960px e 1024px. A topbar fixa (64px, papel a 90% com desfoque) mostra o menu e o selo datilografado só a partir de 1100px. A tabela rola na horizontal abaixo de 600px.

### Named Rules
**A Regra da Margem Única.** Uma régua vertical vermelha por página, na calha esquerda, atravessando todas as seções. Nenhum outro elemento usa trilho vertical decorativo em vermelho.

**A Regra do Livro Aberto.** Cada lista de lançamentos abre com uma borda superior de 2px em tinta e separa cada linha com fio de 1px. Lançamento é linha, não card.

## Elevation & Depth

Profundidade de papel sobre mesa: o livro é plano, as folhas soltas (ficha, celular) projetam uma sombra baixa, difusa e deslocada para baixo, nunca dura. A separação entre camadas vem do papel de ficha mais claro, do fio de 1px e da pauta; a sombra só aparece em objetos que de fato estão por cima.

### Shadow Vocabulary
- **Folha solta** (`box-shadow: 0 18px 30px -24px rgba(19,34,30,.5)`): a ficha de protocolo.
- **Aparelho** (`box-shadow: 0 30px 50px -28px rgba(10,25,21,.6), 0 2px 0 rgba(255,255,255,.06) inset`): o celular da simulação.
- **Levantar ao passar** (`box-shadow: 0 6px 14px -8px rgba(19,34,30,.45)`): botões no hover, junto com subida de 2px.
- **Carimbo duplo** (`box-shadow: inset 0 0 0 2px papel-2, inset 0 0 0 3.5px currentColor`): segundo aro do carimbo de destaque; é tinta, não elevação.

### Named Rules
**A Regra do Papel Plano.** Lançamentos, partes, tabelas e etapas não têm sombra. Sombra é só para folha solta, aparelho e botão em hover.

## Shapes

Cantos quase retos, de papelaria: folhas e fichas com 4px, carimbos com 5px e borda de 2.5px, botões com 6px. Círculos só para selos de passo (72px), anéis de ícone (44px), pinos de etapa (26px) e fotos da equipe (76px). Fichas e o quadro de conta têm uma margem interna vertical de 1.5px em fio a 18–24px da borda esquerda, como a margem de uma ficha de cartório. O traço carrega significado: cheio para concluído, tracejado para planejado ou futuro (trilho e pino de etapa, seta do repasse à colônia), pontilhado só como guia de conta entre descrição e valor, linha dupla de 3px para a soma. O quadro de mercado usa hachura diagonal de 45° em azul a 10%.

## Components

### Buttons
Firmes e tácteis, com cara de botão de formulário, não de pílula.
- **Shape:** cantos levemente arredondados (6px), borda de 2px, altura mínima de 52px, padding 12px 22px, ícone SVG de 20px com gap de 10px.
- **Primary (cheio):** fundo boia com borda boia. Em capa, texto #1A0D05 sobre capa-boia (8.2:1). O texto claro sobre boia no modo claro ainda não é regra (ver Do's and Don'ts).
- **Outline:** fundo transparente, borda e texto em tinta (em capa, capa-texto).
- **Hover / Focus:** sobe 2px com a sombra "levantar" em 0.18s `cubic-bezier(.2,.8,.2,1)`; no active desce 1px e perde a sombra. Foco global: contorno de 3px em boia com 3px de afastamento.
- **Disabled:** 50% de opacidade, sem movimento.

### Carimbo
O elemento-assinatura do sistema. Rótulo em letra de carimbo maiúscula dentro de uma borda de 2.5px em currentColor, raio de 5px, girado por `--r` (entre −5° e 4°, padrão −2°), com máscara de ruído fractal de 140px que deixa a tinta irregular.
- **Azul:** padrão, para o que foi conferido ou confirmado.
- **Laranja:** para destaque e para os avisos de estimativa ("Estimativa da equipe").
- **Duplo:** segundo aro interno para o carimbo de maior peso (confiança, prêmio).
- **Sobre conteúdo:** quando cruza uma borda (conta, quadro), recebe fundo de papel para cobrir o fio.
- **Batida (animação):** entra de escala 1.9 com desfoque de 3px para escala 1 em 0.32s `cubic-bezier(.3,1.5,.5,1)`.

### Ficha de Protocolo
Folha solta em papel-2 com pauta de 28px a partir de 54px, margem interna em fio, cabeçalho com o número em letra de carimbo (1.3rem) e a palavra "simulação" datilografada, sublinhado de 2px em tinta. Campos em grade de 62px de rótulo datilografado em maiúsculas e valor datilografado. Dados protegidos aparecem como tarja preta (#0B1210, raio de 1px) seguida de "nome protegido".

### Livro de Lançamentos
Listas de dados (problema, camadas de mercado, partes, equipe, tabela) abrem com borda superior de 2px em tinta e separam cada linha com fio de 1px. O número vai em Figure azul, a descrição em Body e a fonte em Label tinta-2.

### Conta
Quadro em papel-2 com margem interna, valores tabulares: descrição, guia pontilhado de 2px e valor datilografado; débitos prefixados com sinal de menos; soma sob linha dupla de 3px com o total em letra de carimbo 2.2rem em boia-texto; carimbo laranja de estimativa preso na borda superior direita. No celular (≤560px) o guia some e cada linha ganha fio pontilhado.

### Trilho de Etapas
Selos circulares de 72px (passos) ou pinos de 26px (etapas) ligados por traço de 2px; número datilografado em capa-boia. Etapa concluída: pino cheio e traço cheio em capa-boia. Etapa planejada: pino e traço tracejados em capa-texto-2. A legenda repete as duas formas de traço. Vertical no celular, horizontal em cinco colunas no desktop. No hover o selo de passo gira −6°.

### Linha em Branco
Conteúdo ainda inexistente (papel na equipe, e-mail de contato) é uma linha de 1.5px em fio ou capa-texto-2, com altura de uma linha de texto, oculta para leitores de tela. Nunca um texto de preenchimento.

### Navigation
Topbar fixa de 64px em papel a 90% com desfoque de 8px e fio inferior. Marca em letra de carimbo 1.5rem com espaçamento 0.06em. Links em Body 0.95rem tinta-2; no hover viram tinta e ganham sublinhado de 2px em boia que cresce da esquerda em 0.25s. Selo datilografado à direita. No celular ficam só marca e botão de tema (44px, papel-2, fio, raio de 6px).

### Simulação de WhatsApp
Citação fiel de outra interface, isolada nos tokens zap-* (fundo #EAE4DA, balão próprio #D9FDD3, balão do agente #FFFFFF, topo #0E5C4F, texto #111B21), dentro de um celular de raio 34px. Sempre leva a etiqueta "Simulação" datilografada no topo. Balões entram com subida de 8px em 0.35–0.45s `cubic-bezier(.16,1,.3,1)`. Os tokens zap-* não saem dessa citação. O botão "pausar animação" fica logo abaixo, como link sublinhado.

## Do's and Don'ts

### Do:
- **Do** manter a pauta de 32px no papel (`repeating-linear-gradient`, linha de 1px em pauta) e a margem vermelha de 2px na calha esquerda em toda página nova.
- **Do** escrever a fonte de cada número em Courier Prime, tinta-2, 0.82rem, na mesma linha de lançamento.
- **Do** usar traço cheio para concluído e tracejado para planejado, sempre com a legenda quando houver mais de uma forma.
- **Do** mostrar o que falta como linha pautada vazia, oculta para leitores de tela.
- **Do** girar cada carimbo com um `--r` próprio entre −5° e 4° e manter a máscara de ruído.
- **Do** usar boia-texto (#A8400B) sempre que o laranja for texto sobre papel claro, inclusive em carimbos laranja pequenos.
- **Do** redefinir os tokens de tinta dentro de uma capa em vez de colorir componentes à mão.
- **Do** ligar animações só com JS e movimento permitido, oferecer pausa e deixar o estado final completo e estático sem elas.

### Don't:
- **Don't** usar papel creme ou amarelado; o papel é branco frio (#F5F8F6).
- **Don't** adicionar uma quarta cor de acento nem usar a margem vermelha como cor de texto, alerta ou botão.
- **Don't** organizar dados como fileira de cards iguais com sombra; dados são lançamentos em linha no livro.
- **Don't** usar Archivo fora da largura 75 nem em pesos além de 500 e 600.
- **Don't** usar tracejado para algo concluído, nem traço cheio para algo planejado.
- **Don't** preencher campos ausentes com texto de exemplo ou dado inventado.
- **Don't** usar sombra dura deslocada ou sombra em lançamentos; sombra só em folha solta, aparelho e botão em hover.
- **Don't** levar os tokens zap-* para fora da simulação de WhatsApp.
