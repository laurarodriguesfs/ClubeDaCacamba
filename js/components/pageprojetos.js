let listaProjetos = [];
let projetosExibidos = 3;

async function carregarProjetos() {
  try {
    const res = await fetch('projetos.json');
    listaProjetos = await res.json();
    renderizarEstrutura();
    renderizarProjetos();
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
    if (projetosExibidos >= listaProjetos.length) {
      projetosExibidos = listaProjetos.length;
      document.querySelector("#btn-carregar-mais").style.display = "none";
    }
    renderizarProjetos();
  });
}

function renderizarProjetos() {
  const listaEl = document.querySelector(".projetos-lista");
  listaEl.innerHTML = "";

  listaProjetos.slice(0, projetosExibidos).forEach(projeto => {
    const projetoHTML = `
      <div class="card-projeto row">
        <div class="coluna-esquerda col s6">
          <div class="card-image">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
          </div>
        </div>
        <div class="coluna-direita col s6">
          <h5>${projeto.titulo}</h5>
          <p>${projeto.descricao}</p>
          <a href="#/projeto/${projeto.id}" class="btn-ver-projeto">Ver mais</a>
        </div>
      </div>
    `;
    listaEl.insertAdjacentHTML("beforeend", projetoHTML);
  });
}

function verProjeto(id) {
  const projeto = listaProjetos.find(p => p.id == id);
  if (!projeto) {
    console.error(`Projeto com ID ${id} não encontrado.`);
    return;
  }

  const main = document.querySelector("#main");
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${projeto.titulo}</h4>
        <div class="row">
          <img class="single-projeto card-image col s12 l6" src="${projeto.imagem}" alt="${projeto.titulo}">
          <p>${projeto.conteudo}</p>
        </div>
        <a href="#projetos" class="btn-voltar">Voltar para projetos</a>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}


function projetos() {
  projetosExibidos = 3;
  carregarProjetos();
}

// Esta exportação já está correta, pois é uma exportação nomeada.
async function carregarEVerProjeto(id) {
    if (listaProjetos.length === 0) {
    try {
      const res = await fetch('projetos.json');
      listaProjetos = await res.json();
    } catch (err) {
      console.error('Erro ao carregar JSON:', err);
      return;
    }
  }
  verProjeto(id);
}