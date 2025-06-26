import navbar from "./components/navbar.js";
import home from "./components/pagehome.js";
import sobre from "./components/pagesobre.js";
import projetos from "./components/pageprojetos.js";
import blog from "./components/pageblog.js";
import parceiros from "./components/pageparceiros.js";
import contato from "./components/pagecontato.js";
import footer from "./components/footer.js";
import adicionarEventoNosSlides from './adicionarEventoNosSlides.js';


navbar();
footer();

// Função para limpar e renderizar a página
function renderPage(pageFunction) {
  const main = document.querySelector("#main");
  if (main) {
    main.innerHTML = ""; // limpa o conteúdo atual
    pageFunction();      // carrega a nova página
    window.scrollTo(0, 0);
  }
}

function handleRoute() {
  const hash = location.hash;

  if (hash.startsWith("#/projeto/")) {
    const id = hash.split("/")[2];
    import('./components/pageprojetos.js').then(module => {
      module.carregarEVerProjeto(id);
    });
    return;
  }

  if (hash.startsWith("#/blog/")) {
    const id = hash.split("/")[2];
    import('./components/pageblog.js').then(module => {
      module.carregarEVerBlog(id);
    });
    return;
  }


  switch (hash) {
    case "#home":
      renderPage(() => {
        home();
        adicionarEventoNosSlides();
      });
      break;
    case "#sobre":
      renderPage(sobre);
      break;
    case "#projetos":
      renderPage(projetos);
      break;
    case "#blog":
      renderPage(blog);
      break;
    case "#parceiros":
      renderPage(parceiros);
      break;
    case "#contato":
      renderPage(contato);
      break;
    default:
      renderPage(() => {
        home();
        adicionarEventoNosSlides();
      });
  }
}

// Executa ao iniciar
handleRoute();

// Executa quando a hash muda
window.addEventListener("hashchange", handleRoute);
