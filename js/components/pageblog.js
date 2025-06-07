let listaBlog = [];

// Variável para controlar quantos posts mostrar inicialmente e a cada clique
let postsExibidos = 3;

async function carregarBlogs(){
  try {
    const res = await fetch("blog.json");
    listaBlog = await res.json();
    renderizarListaBlog(); // só chama depois de carregar
  } catch (err) {
    console.error("Erro ao carregar JSON:", err);
  }
}


// Função para renderizar a lista de Blogs
function renderizarListaBlog() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="blog">
      <div class="container">
        <div class="section">
          <h2 class="center">Blog</h2>
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
        <h3 class="center">${blog.titulo}</h3>
        <p class="center">${blog.descricao}</p>
        <div class="row">
          <img class="imagem-blog col s12 m6" src="${blog.imagem.src}" alt="${blog.imagem.alt}">
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
  postsExibidos = 3; 
  carregarBlogs(); // agora carrega e depois renderiza
}