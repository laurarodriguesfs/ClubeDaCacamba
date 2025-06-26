let listaBlog = [];
let postsExibidos = 3;

async function carregarBlogs(){
  try {
    const res = await fetch("blog.json");
    listaBlog = await res.json();
    renderizarListaBlog();
  } catch (err) {
    console.error("Erro ao carregar JSON:", err);
  }
}

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
          <button href="#/blog/${blog.id}" class="btn-ver-blog" data-id="${blog.id}">Ver mais</button>          </div>
        </div>
    `;
  })

  html += `
        </div>
  `;
  
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
  
  const botoes = document.querySelectorAll(".btn-ver-blog");
  botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
      e.preventDefault(); 
      const id = e.target.dataset.id;
      window.location.hash = `#/blog/${id}`;
      verBlog(id);
    });
  });

  const btnCarregarMais = document.querySelector("#btn-carregar-mais");
  if (btnCarregarMais) {
    btnCarregarMais.addEventListener("click", () => {
      postsExibidos += 3;
      if (postsExibidos > listaBlog.length) {
        postsExibidos = listaBlog.length;
      }
      renderizarListaBlog();
    });
  }
}

function verBlog(id) {
  const blog = listaBlog.find(p => p.id == id);
  
  if (!blog) {
    console.error(`Blog com ID ${id} não encontrado.`);
    window.location.hash = "#blog";
    return;
  }
  
  let main = document.querySelector("#main");
  
  main.innerHTML = `
    <div class="container page-blog">
      <div class="section">
        <h3 class="center">${blog.titulo}</h3>
        <div class="row">
        <img class="imagem-blog col s12 m6" src="${blog.imagem.src}" alt="${blog.imagem.alt}">
        <h4>Descrição</h4>
        <p class="center">${blog.descricao}</p>
        <p class="center">${blog.conteudo}</p>
        </div>
        <button class="btn-voltar">Voltar</button>
      </div>
    </div>
  `;

  window.scrollTo(0, 0);
  
  document.querySelector(".btn-voltar").addEventListener("click", () => {
    window.location.hash = "#blog";
  });
}

export default function blog() {
  postsExibidos = 3; 
  carregarBlogs();
}

export async function carregarEVerBlog(id) {
  if (!listaBlog.length) { 
    await carregarBlogs();
  }
  verBlog(id);
}