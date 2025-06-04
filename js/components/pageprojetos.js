const listaProjetos = [
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
  {
    id: 1,
    titulo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento",
    descricao: "Resumo do Projeto A",
    conteudo: "Apresentação de pôster no III Congresso Nacional da Associação Brasileira de Análise de Comportamento pelo estudante de mestrado em Análise do Comportamento, Júlio Abner (2024).",
    imagem: "images/Projetos/evento 8.jpg"
  },
];

// Variável para controlar quantos projetos mostrar inicialmente e a cada clique
let projetosExibidos = 3;

// Função para renderizar os projetos até o limite atual
function renderizarListaProjetos() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="page-projetos container">
      <div class="section">
        <h4>Projetos e eventos</h4>
        <h6>Nossa participação em eventos científicos envolvem tanto a apresentação de cartazes e pôsteres, a publicação de resumos e artigos científicos em Anais de Congressos e Revistas Científicas e a realização de atividades interativas com o público geral.</h6>

        <div class="projetos-lista">
  `;
  
  // Mostra só até projetosExibidos
  listaProjetos.slice(0, projetosExibidos).forEach(projeto => {
    html += `
      <div class="card-projeto">
        <div class="card-image">
          <img src="${projeto.imagem}" alt="Comitê de Sustentabilidade">
        </div>
        <h5>${projeto.titulo}</h5>
        <p>${projeto.descricao}</p>
        <button class="btn-ver-projeto" data-id="${projeto.id}">Ver mais</button>
      </div>
    `;
  });
  
  html += `
        </div>
  `;

  // Se ainda tem mais projetos para mostrar, exibe o botão "Carregar mais"
  if (projetosExibidos < listaProjetos.length) {
    html += `
      <button id="btn-carregar-mais">Carregar mais</button>
    `;
  }
  
  html += `
      </div>
    </div>
  `;
  
  main.innerHTML = html;

  // Eventos dos botões "Ver mais"
  const botoes = document.querySelectorAll(".btn-ver-projeto");
  botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      verProjeto(id);
    });
  });

  // Evento do botão "Carregar mais"
  const btnCarregarMais = document.querySelector("#btn-carregar-mais");
  if (btnCarregarMais) {
    btnCarregarMais.addEventListener("click", () => {
      projetosExibidos += 3; // aumenta o limite em 3
      if (projetosExibidos > listaProjetos.length) {
        projetosExibidos = listaProjetos.length;
      }
      renderizarListaProjetos(); // re-renderiza a lista atualizada
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
        <img class="imagem-post col s12 l6" src="${projeto.imagem}" alt="imagem de cachorro">
        <p>${projeto.conteudo}</p>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;

  document.querySelector(".btn-voltar").addEventListener("click", () => {
    renderizarListaProjetos();
  });
}

// Exporta a função principal
export default function projetos() {
  projetosExibidos = 3; // reseta para 3 toda vez que a página carrega
  renderizarListaProjetos();
}