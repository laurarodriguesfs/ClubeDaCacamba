// Exemplo de dados (pode vir de um JSON, API etc.)
const listaBlog = [
  {
    id: 1,
    titulo: "blog A",
    descricao: "Resumo do blog A",
    conteudo: "Conteúdo completo do blog A..."
  },
  {
    id: 2,
    titulo: "blog B",
    descricao: "Resumo do blog B",
    conteudo: "Conteúdo completo do blog B..."
  }
];

// Função para renderizar a lista de Blogs
function renderizarListaBlog() {
  const main = document.querySelector("#main");
  
  let html = `
    <div class="container">
      <div class="section">
        <h4>Blog</h4>
        <div class="blog-lista">
  `;
  
  listaBlog.forEach(blog => {
    html += `
      <div class="card-blog">
        <h5>${blog.titulo}</h5>
        <p>${blog.descricao}</p>
        <button class="btn-ver-blog" data-id="${blog.id}">Ver mais</button>
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
  
  const main = document.querySelector("#main");
  
  main.innerHTML = `
    <div class="container">
      <div class="section">
        <h4>${blog.titulo}</h4>
        <p>${blog.conteudo}</p>
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
