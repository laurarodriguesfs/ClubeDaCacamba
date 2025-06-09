import {
  reinicializarMaterialize
} from "./materialize-init.js";
import adicionarEventoNosSlides from "../adicionarEventoNosSlides.js";
import eventoBlog from "../eventoNosBlogs.js";

export default function home() {
  const main = document.querySelector("#main");

  main.innerHTML = `
    <div class=" container">
      <h3>Nossos projetos e eventos</h3>

      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item" data-id="2">
            <img src="images/Projetos/evento 1.jpg?text=Slide+1" alt="Slide 1">
            <div class="carousel-caption">
              <h5>Apresentação do projeto de extensão</h5>
              <p>O Clube da Caçamba -UEL como uma metacontingência:</p>
            </div>
          </div>

          <div class="carousel-item" data-id="6">
            <img src="images/Projetos/evento 6.jpg?text=Slide+2" alt="Slide 2">
            <div class="carousel-caption">
              <h5>Apresentação de Pôster na 54ª Reunião Anual da Sociedade Brasileira de Psicologia (2024)</h5>
              <p>Realizada pela estudante Lívia Celli.</p>
            </div>
          </div>

          <div class="carousel-item" data-id="3">
            <img src="images/Projetos/evento 3.jpg?text=Slide+3" alt="Slide 3">
            <div class="carousel-caption">
             <h5>Apresentação de Comunicação Oral</h5>
              <p>No Congresso de Psicologia e Análise do Comportamento da UEL (2024)</p>
            </div>
          </div>
        </div>
      </div>

    <!-- Setas -->
    <img src="images/prev.svg" class="carousel-prev" style="position: absolute; top: 50%; left: 10px; cursor: pointer; width: 40px; height: 40px; transform: translateY(-50%);">
    <img src="images/next.svg" class="carousel-next" style="position: absolute; top: 50%; right: 10px; cursor: pointer; width: 40px; height: 40px; transform: translateY(-50%);">
    </div>

    <div class="container row  sobre">
      <div class="coluna-esquerda col s6">
        <h3>Conheça mais sobre nós...</h3>
        <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
        <a class="ver-mais"href="#sobre"> Ver mais</a>
      </div>
      <div class="coluna-direita col s6">
         <img src="images/sobre.png" alt="Ícone de contato" class="imagem-sobre responsive-img">
      </div>
    </div>

    <section class="conteudos section">
      <div class="container">
        <div class="container-header">
          <div class="left">
            <h4 class="white-text">Nossos conteúdos</h4>
          </div>
          <div class="right">
            <a class="ver-mais white-text" href="#blog">ver mais conteúdos</a>
          </div>
        </div>
        <div class="row">
          <!-- Conteúdo 1 -->
          <div class="col s12 m4">
            <div class="card" data-id="1">
              <div class="card-image">
                <img src="images/Blog/Agrofloresta ASAs.jpg" alt="Agrofloresta ASAs">
              </div>
              <div class="card-content">
                <h3 class="card-title">Você conhece a Agrofloresta ASAs</h3>
                <p>Um modelo de agricultura que une produção e preservação ambiental. Criado em SC por Nei Albring, o projeto promove um cultivo sustentável e regenerativo.</p>
              </div>
            </div>
          </div>
        <!-- Conteúdo 2 -->
          <div class="col s12 m4">
            <div class="card" data-id="2">
              <div class="card-image">
                <img src="images/Blog/Você conhece a técnica de desmatamento correntão.jpg" alt="Você conhece a técnica de desmatamento correntão">
              </div>
              <div class="card-content">
                <h3 class="card-title">Você conhece a técnica de desmatamento “correntão?”</h3>
                <p>Essa técnica destrói toda a vegetação de uma área com o uso de correntes e tratores — e já causou graves danos ambientais. Hoje, está proibida por lei devido aos impactos severos na fauna, flora e no solo.</p>
              </div>
            </div>
          </div>
        <!-- Conteúdo 3 -->
          <div class="col s12 m4">
            <div class="card" data-id="3">
              <div class="card-image">
                <img src="images/Blog/Por que é importante higienizar os recicláveis.jpg" alt="Por que é importante higienizar os recicláveis">
              </div>
              <div class="card-content">
                <h3 class="card-title">Por que é importante higienizar os recicláveis?</h3>
                <p>Higienizar os recicláveis protege trabalhadores, evita contaminação e melhora a reciclagem. Um gesto simples que faz toda a diferença.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Seção: Saiba quem são os nossos parceiros -->
      <section class="parceiros section white">
        <div class="container">
          <h4 class="center-align text-darken-3">Saiba quem são os nossos parceiros</h4>
          <div class="container-parceiros row center-align">
            <div class="col s12 m2">
              <div class="card-panel parceiro">
                <img src="images/desplastifica.jpeg" alt="Imagem 2" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiro">
                <img src="images/leca.jpeg" alt="Imagem 3" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiro">
                <img src="images/lunarte.jpeg" alt="Imagem 4" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiro">
                <img src="images/ninter.jpeg" alt="Imagem 5" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiro">
                <img src="images/observatorio.jpeg" alt="Imagem 5" class="responsive-img">
              </div>
            </div>
          </div>
          <div class="container-linha">
            <div class="texto">
              <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
            </div>
            <div class="link">
              <a href="#parceiros" class="ver-mais">ver mais</a>
            </div>
          </div>
        </div>
      </section>
      <!-- Seção: Entre em contato com a gente -->
      <section class="contato section white">
        <div class="container">
          <h4 class="text-darken-3">Entre em contato com a gente!</h4>
          <div class="row">
            <div class="col s12 m6">
              <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
              <div class="center-align">
                <a class="ver-mais" href="#contato" class="text-darken-3">ver mais</a>
              </div>
            </div>
            <div class="col s12 m6 center-align">
              <img class=imagem-contato src="images/contato.png" alt="Ícone de contato" class="responsive-img" style="max-width: 150px;">
            </div>
          </div>
        </div>
      </section>
  `;

  reinicializarMaterialize();
  adicionarEventoNosSlides();
  eventoBlog();
}