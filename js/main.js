import navbar from "./components/navbar.js";
import home from "./components/pagehome.js";
import contato from "./components/pagecontato.js";
import servico from "./components/pageservicos.js";
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
      case "#servicos":
        servico();
        break;
      case "#contato":
        contato();
        break;
      default:
        home(); // fallback para home
    }
  });
  