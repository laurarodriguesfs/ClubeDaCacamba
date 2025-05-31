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

// Carrega a home ao iniciar
renderPage(home);

window.addEventListener("hashchange", () => {
    const main = document.querySelector("#main");
    main.innerHTML = ""; // limpa o conteúdo atual
  
    switch (location.hash) {
      case "#home":
        home();
        break;
      case "#sobre":
        sobre();
        break;
      case "#projetos":
        projetos();
        break;
      case "#blog":
        blog();
        break;
      case "#parceiros":
        parceiros();
        break;
      case "#contato":
        contato();
        break;
      default:
        home(); // fallback para home
    }
  });
  