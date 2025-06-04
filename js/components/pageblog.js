// Exemplo de dados (pode vir de um JSON, API etc.)
const listaBlog = [
  {
    id: 1,
    titulo: "Comitê de Sustentabilidade",
    descricao: "Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!",
    conteudo: "Conteúdo completo do blog A...",
    imagem: "images/cont1.jpg"
  },
  {
    id: 2,
    titulo: "Exposição de Pôster no VII CPAC VIII JAC UEL",
    descricao: "Apresentação de Pôster realizada pelos caçambers Isadora Moura e Júnior Costa no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog B...",
    imagem: "images/cont2.jpg"
  },
  {
    id: 3,
    titulo: "Iniciação Científica no VII CPAC E VIII JAC",
    descricao: "Apresentação de Iniciação Científica realizada pela caçamber Lívia Celli no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog C...",
    imagem: "images/cont3.jpg"
  },
  {
    id: 4,
    titulo: "blog D",
    descricao: "Resumo do blog D",
    conteudo: "Conteúdo completo do blog D..."
  }
];

// Função para renderizar a lista de Blogs
function renderizarListaBlog() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="conteudos">
      <div class="container">
        <div class="section">
          <h4>Blog</h4>
          <div class="blog-lista">
            <div class="row">
  `;
  
  listaBlog.forEach(blog => {
    html += `
      
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="${blog.imagem}" alt="Comitê de Sustentabilidade">
            </div>
            <div class="card-content">
              <h3 class="card-title">${blog.titulo}</h3>
              <p>${blog.descricao}</p>
            </div>
            <button class="btn-ver-blog" data-id="${blog.id}">Ver mais</button>
          </div>
        </div>
    `;
  });
  
  html += `
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  main.innerHTML = html;
  
  // Adiciona evento aos botões de "Ver mais"
  const botoes = document.querySelectorAll(".btn-ver-blog");
  botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      verBlog(id);
    });
  });
}

// Função para renderizar um blog específico
function verBlog(id) {
  const blog = listaBlog.find(p => p.id == id);
  
  if (!blog) return;
  
  let main = document.querySelector("#main");
  
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${blog.titulo}</h4>
        <div class="row">
          <img class="imagem-post col s12 l6" src="${blog.imagem}" alt="imagem de cachorro">
          <p>${blog.conteudo}</p>
        </div>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;
  
  // Evento para voltar para a lista
  document.querySelector(".btn-voltar").addEventListener("click", () => {
    renderizarListaBlog();
  });
}

// Exporta a função principal
export default function blog() {
  renderizarListaBlog();
}
