import navbar from "./components/navbar.js";
import home from "./components/pagehome.js";
import sobre from "./components/pagesobre.js";
import projetos from "./components/pageprojetos.js";
import blog from "./components/pageblog.js";
import parceiros from "./components/pageparceiros.js";
import contato from "./components/pagecontato.js";
import footer from "./components/footer.js";

navbar();
footer();

// Função para limpar e renderizar a página
function renderPage(pageFunction) {
  const main = document.querySelector("#main");
  if (main) {
    main.innerHTML = ""; // limpa o conteúdo atual
    pageFunction();      // carrega a nova página
  }
}

// Função para lidar com a rota atual
function handleRoute() {
  const hash = location.hash;

  switch (hash) {
    case "#home":
      renderPage(home);
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
      renderPage(home);
  }
}

// Executa ao iniciar
handleRoute();

// Executa quando a hash muda
window.addEventListener("hashchange", handleRoute);
