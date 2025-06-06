let listaProjetos = [];
let projetosExibidos = 3;

async function carregarProjetos() {
  try {
    const res = await fetch('projetos.json');
    listaProjetos = await res.json();
    renderizarListaProjetos(); // só chama depois de carregar
  } catch (err) {
    console.error('Erro ao carregar JSON:', err);
  }
}

function renderizarListaProjetos() {
  const main = document.querySelector("#main");

  let html = `
    <div class="page-projetos container">
      <div class="section">
        <h4>Projetos e eventos</h4>
        <h6>Nossa participação em eventos científicos envolvem tanto a apresentação de cartazes e pôsteres, a publicação de resumos e artigos científicos em Anais de Congressos e Revistas Científicas e a realização de atividades interativas com o público geral.</h6>

        <div class="projetos-lista">
  `;

  listaProjetos.slice(0, projetosExibidos).forEach(projeto => {
    html += `
      <div class="card-projeto row">
        <div class="coluna-esquerda col s6">
          <div class="card-image">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
          </div>
        </div>
        <div class="coluna-esquerda col s6">
          <h5>${projeto.titulo}</h5>
          <p>${projeto.descricao}</p>
          <a href="#/projeto/${projeto.id}" class="btn-ver-projeto">Ver mais</a>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  if (projetosExibidos < listaProjetos.length) {
    html += `
      <div class="section-carregar-mais align-center">
        <button id="btn-carregar-mais">Carregar mais</button>
      </div>
    `;
  }

  html += `
      </div>
    </div>
  `;

  main.innerHTML = html;

  document.querySelectorAll(".btn-ver-projeto").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      verProjeto(id);
    });
  });

  const btnCarregarMais = document.querySelector("#btn-carregar-mais");
  if (btnCarregarMais) {
    btnCarregarMais.addEventListener("click", () => {
      projetosExibidos += 3;
      if (projetosExibidos > listaProjetos.length) {
        projetosExibidos = listaProjetos.length;
      }
      renderizarListaProjetos();
    });
  }
}

export function verProjeto(id) {
  const projeto = listaProjetos.find(p => p.id == id);
  if (!projeto) return;

  const main = document.querySelector("#main");
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${projeto.titulo}</h4>
        <img class="imagem-post col s12 l6" src="${projeto.imagem}" alt="${projeto.titulo}">
        <p>${projeto.conteudo}</p>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;

  document.querySelector(".btn-voltar").addEventListener("click", () => {
    location.hash = "#projetos";
  });

  document.querySelector(".btn-voltar").addEventListener("click", () => {
    renderizarListaProjetos();
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
