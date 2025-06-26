let listaProjetos = [];
let projetosExibidos = 3;

async function carregarProjetos() {
  try {
    const res = await fetch('projetos.json');
    listaProjetos = await res.json();
    renderizarEstrutura(); // estrutura estática
    renderizarProjetos();  // itens dinâmicos
  } catch (err) {
    console.error('Erro ao carregar JSON:', err);
  }
}

function renderizarEstrutura() {
  const main = document.querySelector("#main");

  main.innerHTML = `
    <div class="page-projetos container">
      <div class="section">
        <h4>Projetos e eventos</h4>
        <h6>Nossa participação em eventos científicos envolve tanto a apresentação de cartazes e pôsteres, a publicação de resumos e artigos científicos em Anais de Congressos e Revistas Científicas e a realização de atividades interativas com o público geral.</h6>
        <div class="projetos-lista"></div>
        <div class="section-carregar-mais align-center">
          <button id="btn-carregar-mais">Carregar mais</button>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#btn-carregar-mais").addEventListener("click", () => {
    projetosExibidos += 3;
    if (projetosExibidos > listaProjetos.length) {
      projetosExibidos = listaProjetos.length;
      document.querySelector("#btn-carregar-mais").style.display = "none";
    }
    renderizarProjetos();
  });
}

function renderizarProjetos() {
  const listaEl = document.querySelector(".projetos-lista");
  listaEl.innerHTML = ""; // limpa antes de adicionar novamente

  listaProjetos.slice(0, projetosExibidos).forEach(projeto => {
    const projetoHTML = `
      <div class="card-projeto row">
        <div class="coluna-esquerda col s6">
          <div class="card-image">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
          </div>
        </div>
        <div class="coluna-esquerda col s6">
          <h5>${projeto.titulo}</h5>
          <p>${projeto.descricao}</p>
          <button class="btn-ver-projeto" data-id="${projeto.id}">Ver mais</button>
        </div>
      </div>
    `;
    listaEl.insertAdjacentHTML("beforeend", projetoHTML);
  });

  document.querySelectorAll(".btn-ver-projeto").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      verProjeto(id);
    });
  });
}

export function verProjeto(id) {
  const projeto = listaProjetos.find(p => p.id == id);
  if (!projeto) return;

  const main = document.querySelector("#main");
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${projeto.titulo}</h4>
        <div class="row">
          <img class="single-projeto card-image col s12 l6" src="${projeto.imagem}" alt="${projeto.titulo}">
          <p>${projeto.conteudo}</p>
        </div>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;

  window.scrollTo(0, 0);

  document.querySelector(".btn-voltar").addEventListener("click", () => {
    renderizarEstrutura();
    renderizarProjetos();
  });
}

export default function projetos() {
  projetosExibidos = 3;
  carregarProjetos();
}

export async function carregarEVerProjeto(id) {
  if (!listaProjetos.length) {
    await carregarProjetos();
  }
  verProjeto(id);
}
