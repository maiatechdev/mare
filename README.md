# M.A.R.É

Site da M.A.R.É (Monitoramento de Alertas e Registros de Erosões), da equipe L'acqua by LAMIT.
Pescadores e marisqueiras relatam o avanço do mar pelo WhatsApp e cada relato vira um registro
conferido com maré e ondas, para governos e empresas.

## Estrutura

```
mare-landing/
  index.html          estrutura e textos da página
  css/estilos.css     estilos, por seção, na ordem da página
  js/dados.js         e-mail de contato e equipe (o que a equipe edita)
  js/main.js          funcionamento: cards da equipe, contato e animação do hero
  assets/equipe/      fotos da equipe
PRODUCT.md            o que o site precisa comunicar e as regras de conteúdo
DESIGN.md             sistema visual (cores, tipos, componentes)
```

É HTML, CSS e JavaScript puros, sem build. Para ver, abra `mare-landing/index.html` no navegador.

## Tarefas comuns

- **Trocar e-mail, função ou formação:** edite `mare-landing/js/dados.js`.
- **Adicionar a foto de alguém:** salve um JPG quadrado, com o rosto no centro (320 x 320 px basta),
  em `mare-landing/assets/equipe/` com o nome indicado em `dados.js`. Sem o arquivo, o card mostra as iniciais.

## Regras de conteúdo

- A conversa no WhatsApp do topo é uma simulação e precisa continuar marcada como tal.
- Números de negócio são estimativas e ficam sinalizados assim. Todo dado tem fonte visível.
- Não inventar depoimentos, parceiros ou resultados.
- Texto em português, sem travessões.

## Formatação

O código segue o Prettier (configuração em `mare-landing/.prettierrc.json`):

```
npx prettier@3.3.3 --write mare-landing
```
