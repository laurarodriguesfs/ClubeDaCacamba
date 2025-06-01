// pageprojetos.js

// Exemplo de dados (pode vir de um JSON, API etc.)
const listaProjetos = [
  {
    id: 1,
    titulo: "Projeto A",
    descricao: "Resumo do Projeto A",
    conteudo: "Conteúdo completo do Projeto A..."
  },
  {
    id: 2,
    titulo: "Projeto B",
    descricao: "Resumo do Projeto B",
    conteudo: "Conteúdo completo do Projeto B..."
  }
];

// Função para renderizar a lista de projetos
function renderizarListaProjetos() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="container">
      <div class="section">
        <h4>Projetos</h4>
        <div class="projetos-lista">
  `;
  
  listaProjetos.forEach(projeto => {
    html += `
      <div class="card-projeto">
        <h5>${projeto.titulo}</h5>
        <p>${projeto.descricao}</p>
        <button class="btn-ver-projeto" data-id="${projeto.id}">Ver mais</button>
      </div>
    `;
  });
  
  html += `
        </div>
      </div>
    </div>
  `;
  
  main.innerHTML = html;
  
  // Adiciona evento aos botões de "Ver mais"
  const botoes = document.querySelectorAll(".btn-ver-projeto");
  botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      verProjeto(id);
    });
  });
}

// Função para renderizar um projeto específico
function verProjeto(id) {
  const projeto = listaProjetos.find(p => p.id == id);
  
  if (!projeto) return;
  
  const main = document.querySelector("#main");
  
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${projeto.titulo}</h4>
        <p>${projeto.conteudo}</p>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;
  
  // Evento para voltar para a lista
  document.querySelector(".btn-voltar").addEventListener("click", () => {
    renderizarListaProjetos();
  });
}

// Exporta a função principal
export default function projetos() {
  renderizarListaProjetos();
}
