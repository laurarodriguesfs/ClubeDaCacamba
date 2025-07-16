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

// Aguarda o carregamento completo da página para rodar o código
window.addEventListener('load', () => {

  // Seleciona os elementos que vamos observar e manipular
  const botaoMascote = document.getElementById('botao-mascote');
  const footer = document.getElementById('footer');

  // Se o botão ou o footer não existirem na página, o código para aqui.
  if (!botaoMascote || !footer) {
    return;
  }

  // Configurações do observador
  const observerOptions = {
    root: null, // Observa em relação à janela principal (viewport)
    rootMargin: '0px 0px -50px 0px', // Ativa um pouco antes do footer tocar o fundo da tela
    threshold: 0 // Ativa assim que qualquer pixel do footer se torna visível
  };

  // A função que será executada quando o footer entrar ou sair da tela
  const intersectionCallback = (entries) => {
    entries.forEach(entry => {
      // Se o footer está visível na área de observação...
      if (entry.isIntersecting) {
        // Adiciona uma classe para esconder o botão
        botaoMascote.classList.add('esconder-no-footer');
      } else {
        // Remove a classe para mostrar o botão novamente
        botaoMascote.classList.remove('esconder-no-footer');
      }
    });
  };

  // Cria o observador e manda ele "assistir" ao footer
  const observer = new IntersectionObserver(intersectionCallback, observerOptions);
  observer.observe(footer);

});