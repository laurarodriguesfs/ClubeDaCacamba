// Exemplo de dados (pode vir de um JSON, API etc.)
const listaBlog = [
  {
    id: 1,
    titulo: "Comitê de Sustentabilidade",
    descricao: "Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!",
    conteudo: "Conteúdo completo do blog A...",
    imagem: {src: "images/Blog/Agrofloresta ASAs.jpg", alt: "Agrofloresta ASAs"}
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
    titulo: "Comitê de Sustentabilidade",
    descricao: "Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!",
    conteudo: "Conteúdo completo do blog A...",
    imagem: "images/cont1.jpg"
  },
  {
    id: 5,
    titulo: "Exposição de Pôster no VII CPAC VIII JAC UEL",
    descricao: "Apresentação de Pôster realizada pelos caçambers Isadora Moura e Júnior Costa no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog B...",
    imagem: "images/cont2.jpg"
  },
  {
    id: 6,
    titulo: "Iniciação Científica no VII CPAC E VIII JAC",
    descricao: "Apresentação de Iniciação Científica realizada pela caçamber Lívia Celli no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog C...",
    imagem: "images/cont3.jpg"
  },{
    id: 7,
    titulo: "Comitê de Sustentabilidade",
    descricao: "Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!",
    conteudo: "Conteúdo completo do blog A...",
    imagem: "images/cont1.jpg"
  },
  {
    id: 8,
    titulo: "Exposição de Pôster no VII CPAC VIII JAC UEL",
    descricao: "Apresentação de Pôster realizada pelos caçambers Isadora Moura e Júnior Costa no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog B...",
    imagem: "images/cont2.jpg"
  },
  {
    id: 9,
    titulo: "Iniciação Científica no VII CPAC E VIII JAC",
    descricao: "Apresentação de Iniciação Científica realizada pela caçamber Lívia Celli no VII CPAC e VIII JAC UEL",
    conteudo: "Conteúdo completo do blog C...",
    imagem: "images/cont3.jpg"
  }
];

// Variável para controlar quantos posts mostrar inicialmente e a cada clique
let postsExibidos = 3;

// Função para renderizar a lista de Blogs
function renderizarListaBlog() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="blog">
      <div class="container">
        <div class="section">
          <h4>Blog</h4>
          <div class="blog-lista">
            <div class="row">
  `;
  
  listaBlog.slice(0, postsExibidos).forEach(blog => {
    html += `
      
        <div class=" col s12 m6 l4">
          <div class="card">
            <div class="card-image">
              <img src="${blog.imagem.src}" alt="${blog.imagem.alt}">
            </div>
            <div class="card-content">
              <h3 class="card-title">${blog.titulo}</h3>
              <p>${blog.descricao}</p>
            </div>
            <button class="btn-ver-blog" data-id="${blog.id}">Ver mais</button>
          </div>
        </div>
    `;
  })

  html += `
        </div>
  `;
  
  // Se ainda tem mais posts para mostrar, exibe o botão "Carregar mais"
  if (postsExibidos < listaBlog.length) {
    html += `
      <div class="section-carregar-mais align-center">
        <button id="btn-carregar-mais">Carregar mais</button>
      </div>
    `;
  }

  html += `
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

  // Evento do botão "Carregar mais"
  const btnCarregarMais = document.querySelector("#btn-carregar-mais");
  if (btnCarregarMais) {
    btnCarregarMais.addEventListener("click", () => {
      postsExibidos += 3; // aumenta o limite em 3
      if (postsExibidos > listaBlog.length) {
        postsExibidos = listaBlog.length;
      }
      renderizarListaBlog(); // re-renderiza a lista atualizada
    });
  }
}





// Função para renderizar um blog específico
function verBlog(id) {
  const blog = listaBlog.find(p => p.id == id);
  
  if (!blog) return;
  
  let main = document.querySelector("#main");
  
  main.innerHTML = `
    <div class="container page-blog">
      <div class="section">
        <h3>${blog.titulo}</h3>
        <div class="row">
          <img class="imagem-blog col s12 m6" src="${blog.imagem.src}" alt="${blog.imagem.alt}">
          <h4>Descrição</h4>
          <p>${blog.descricao}</p>
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
  postsExibidos = 3; // reseta para 3 toda vez que a página carrega
  renderizarListaBlog();
}
