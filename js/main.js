// js/main.js

// --- 1. IMPORTAÇÕES ---
// Importa a função de inicialização do painel admin.
import { initAdminPanel } from './admin.js';

// Importa os componentes do seu site público.
import navbar from "./components/navbar.js";
import home from "./components/pagehome.js";
import sobre from "./components/pagesobre.js";
import projetos from "./components/pageprojetos.js";
import blog from "./components/pageblog.js";
import parceiros from "./components/pageparceiros.js";
import contato from "./components/pagecontato.js";
import footer from "./components/footer.js";
import adicionarEventoNosSlides from './adicionarEventoNosSlides.js';

// --- 2. LÓGICA DO SITE PÚBLICO ---
// Esta é a função de roteamento original para as páginas públicas.
function handlePublicRoute() {
  const hash = location.hash;
  const main = document.querySelector("#main");

  // Se o #main não existir, não faz nada.
  if (!main) return;

  // Função para limpar e renderizar a página
  const renderPage = (pageFunction) => {
    main.innerHTML = ""; // limpa o conteúdo atual
    pageFunction();      // carrega a nova página
    window.scrollTo(0, 0);
  };

  // Lógica para rotas específicas de projeto e blog
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

  // Roteamento principal para páginas públicas
  switch (hash) {
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
    case "#home":
    default:
      renderPage(() => {
        home();
        adicionarEventoNosSlides();
      });
  }
}

// Esta função anexa os eventos que são persistentes no site público.
function initPublicSiteEventListeners() {
    const botaoMascote = document.getElementById('botao-mascote');
    const footerElement = document.getElementById('footer');

    if (!botaoMascote || !footerElement) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0
    };

    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        botaoMascote.classList.toggle('esconder-no-footer', entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
    observer.observe(footerElement);
}


// --- 3. ROTEADOR PRINCIPAL UNIFICADO ---
$(document).ready(function() {
  // Carrega os componentes fixos do layout uma única vez.
  navbar();
  footer();

  // Função "cérebro" que decide o que fazer baseado na hash.
  function mainRouter() {
    const hash = window.location.hash;

    // Se a hash começar com #admin, entregamos o controle para o painel admin.
    // Usamos startsWith para permitir rotas como #admin/users no futuro.
    if (hash.startsWith('#admin')) {
      initAdminPanel();
    } else {
      // Caso contrário, é uma rota do site público.
      handlePublicRoute();
    }
  }

  // Anexa o roteador principal ao evento hashchange.
  // Este é o ÚNICO event listener de hashchange.
  $(window).on('hashchange', mainRouter);

  // Executa o roteador uma vez no carregamento inicial da página.
  mainRouter();
  
  // Anexa os outros eventos do site público.
  initPublicSiteEventListeners();
});