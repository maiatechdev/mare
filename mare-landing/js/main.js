/*
 * Comportamento da página. Os dados (e-mail e equipe) ficam em js/dados.js.
 *
 * 1. Equipe: monta os cards a partir de EQUIPE.
 * 2. Contato: mostra o e-mail e liga os botões "Enviar" e "Copiar".
 * 3. Demonstração: anima a conversa virando registro no hero.
 */

/* ---------- utilidades ---------- */

/** Cria um elemento com classe e texto opcionais. */
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

/** Linha do card: o texto, ou uma linha em branco quando o dado ainda não existe. */
function linhaOuVazio(texto, classe) {
  if (texto) return criar("span", classe, texto);
  const vazio = criar("span", "vazio");
  vazio.setAttribute("aria-hidden", "true");
  return vazio;
}

/** "Ana Beatriz Macedo" vira "AB". */
function iniciais(nome) {
  return nome
    .split(" ")
    .filter(Boolean)
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/* ---------- 1. equipe ---------- */

/** Círculo da foto: mostra as iniciais e troca pela foto quando o arquivo carrega. */
function criarFoto(pessoa) {
  const moldura = criar("div", "foto");

  const ini = criar("span", "ini", iniciais(pessoa.nome));
  ini.setAttribute("aria-hidden", "true");
  moldura.appendChild(ini);

  // A imagem só entra na página se o arquivo existir. Sem "loading=lazy":
  // o navegador não carrega uma imagem lazy que ainda não está no documento.
  const img = new Image();
  img.alt = "Foto de " + pessoa.nome;
  img.decoding = "async";
  img.onload = () => moldura.replaceChildren(img);
  img.src = pessoa.foto;

  return moldura;
}

function criarCardPessoa(pessoa) {
  const card = criar("li", "pessoa");
  card.append(
    criarFoto(pessoa),
    criar("b", "", pessoa.nome),
    linhaOuVazio(pessoa.papel, "papel"),
    linhaOuVazio(pessoa.formacao, "forma"),
  );
  return card;
}

function montarEquipe() {
  const lista = document.getElementById("time");
  EQUIPE.forEach((pessoa) => lista.appendChild(criarCardPessoa(pessoa)));
}

/* ---------- 2. contato ---------- */

function montarContato() {
  if (!EMAIL) return; // sem e-mail: fica a linha em branco e os botões escondidos

  const campo = document.getElementById("email");
  const aviso = document.getElementById("copiado");

  campo.textContent = EMAIL;
  campo.classList.remove("vazio");
  document.getElementById("email-acoes").hidden = false;
  document.getElementById("email-link").href = "mailto:" + EMAIL;

  document.getElementById("copiar").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      aviso.textContent = "E-mail copiado.";
    } catch {
      // Sem acesso à área de transferência: seleciona o texto para a pessoa copiar.
      const intervalo = document.createRange();
      intervalo.selectNodeContents(campo);
      const selecao = getSelection();
      selecao.removeAllRanges();
      selecao.addRange(intervalo);
      aviso.textContent = "E-mail selecionado. Use Ctrl+C para copiar.";
    }
  });
}

/* ---------- 3. demonstração do hero ---------- */

// Cada elemento com data-t="N" aparece na etapa N. Tempos em milissegundos.
const ETAPAS_MS = [400, 1700, 3200, 4600, 5900, 7300];
const INTERVALO_ENTRE_ITENS_MS = 260; // itens da mesma etapa entram um depois do outro
const DURACAO_CICLO_MS = 12500;

/*
 * Sem JavaScript ou com movimento reduzido, tudo já aparece pronto (o CSS só esconde
 * os itens quando a classe "anima" está ligada).
 */
function iniciarDemonstracao() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const demo = document.getElementById("demo");
  const botao = document.getElementById("pausar");
  const itens = [...demo.querySelectorAll("[data-t]")];

  let timers = [];
  let pausado = false;
  let visivel = true;
  let rodando = false;

  const limparTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  const mostrarTudo = () => itens.forEach((item) => item.classList.add("on"));

  function mostrarEtapa(etapa) {
    itens
      .filter((item) => Number(item.dataset.t) === etapa)
      .forEach((item, ordem) => {
        setTimeout(() => item.classList.add("on"), ordem * INTERVALO_ENTRE_ITENS_MS);
      });
  }

  function ciclo() {
    limparTimers();
    rodando = true;
    itens.forEach((item) => item.classList.remove("on"));

    ETAPAS_MS.forEach((tempo, etapa) => {
      timers.push(setTimeout(() => mostrarEtapa(etapa), tempo));
    });

    // Recomeça só se a demonstração estiver na tela e não estiver pausada.
    timers.push(
      setTimeout(() => {
        if (!pausado && visivel) ciclo();
        else rodando = false;
      }, DURACAO_CICLO_MS),
    );
  }

  function alternarPausa() {
    pausado = !pausado;
    botao.setAttribute("aria-pressed", String(pausado));
    botao.querySelector("span").textContent = pausado ? "Reproduzir animação" : "Pausar animação";

    if (pausado) {
      limparTimers();
      rodando = false;
      mostrarTudo();
    } else {
      ciclo();
    }
  }

  demo.classList.add("anima");
  botao.hidden = false;
  botao.addEventListener("click", alternarPausa);

  // Só anima enquanto a demonstração está visível.
  new IntersectionObserver(
    ([entrada]) => {
      visivel = entrada.isIntersecting;
      if (visivel && !pausado && !rodando) ciclo();
    },
    { threshold: 0.25 },
  ).observe(demo);
}

/* ---------- início ---------- */

montarEquipe();
montarContato();
iniciarDemonstracao();
