import { reinicializarMaterialize } from "./materialize-init.js";

export default function home() {
  const main = document.querySelector("#main");

  main.innerHTML = `
    <div class="container">
      <h3>Nossos projetos</h3>

      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item">
            <img src="images/slide1.jpg?text=Slide+1" alt="Slide 1">
            <div class="carousel-caption">
              <h5>Título do Slide 1</h5>
              <p>Descrição do Slide 1 que vai aparecer aqui.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="images/slide2.jpg?text=Slide+2" alt="Slide 2">
            <div class="carousel-caption">
              <h5>Título do Slide 2</h5>
              <p>Descrição do Slide 2 que vai aparecer aqui.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="images/slide3.jpg?text=Slide+3" alt="Slide 3">
            <div class="carousel-caption">
              <h5>Título do Slide 3</h5>
              <p>Descrição do Slide 3 que vai aparecer aqui.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="images/slide4.jpg?text=Slide+4" alt="Slide 4">
            <div class="carousel-caption">
              <h5>Título do Slide 4</h5>
              <p>Descrição do Slide 4 que vai aparecer aqui.</p>
            </div>
          </div>
        </div>
      </div>

    <!-- Setas -->
    <img src="images/prev.svg" class="carousel-prev" style="position: absolute; top: 50%; left: 10px; cursor: pointer; width: 40px; height: 40px; transform: translateY(-50%);">
    <img src="images/next.svg" class="carousel-next" style="position: absolute; top: 50%; right: 10px; cursor: pointer; width: 40px; height: 40px; transform: translateY(-50%);">
    </div>

    <div class="container row">
      <div class="col s6">
        <h3>Conheça mais sobre nós...</h3>
        <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
        <a href=""> Ver mais</a>
      </div>
      <div class="col s6">
        <img src="images/sobre.png?text=Slide+2" alt="Slide 2">
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h4 class="white-text center-align">Nossos conteúdos</h4>
        <div class="row">
          <!-- Conteúdo 1 -->
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="caminho-da-imagem-1.jpg" alt="Comitê de Sustentabilidade">
              </div>
              <div class="card-content">
                <span class="card-title">Comitê de Sustentabilidade</span>
                <p>Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!</p>
              </div>
            </div>
          </div>

          <!-- Conteúdo 2 -->
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="caminho-da-imagem-2.jpg" alt="Comitê de Sustentabilidade">
              </div>
              <div class="card-content">
                <span class="card-title">Comitê de Sustentabilidade</span>
                <p>Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!</p>
              </div>
            </div>
          </div>

          <!-- Conteúdo 3 -->
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src="caminho-da-imagem-3.jpg" alt="Comitê de Sustentabilidade">
              </div>
              <div class="card-content">
                <span class="card-title">Comitê de Sustentabilidade</span>
                <p>Parceria entre CPAC, Clube da Caçamba, Desplastifica UEL e Ionarte para promover um evento sustentável!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="center-align">
          <a href="link-para-mais-conteudos.html" class="white-text">ver mais conteúdos</a>
        </div>
      </div>
    </section>

    <!-- Seção: Saiba quem são os nossos parceiros -->
      <section class="section white">
        <div class="container">
          <h4 class="center-align text-darken-3">Saiba quem são os nossos parceiros</h4>
          <div class="row center-align">
            <div class="col s12 m2">
              <div class="card-panel parceiros">
                <img src="images/desplastifica.jpeg" alt="Imagem 2" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiros">
                <img src="images/leca.jpeg" alt="Imagem 3" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiros">
                <img src="images/lunarte.jpeg" alt="Imagem 4" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiros">
                <img src="images/ninter.jpeg" alt="Imagem 5" class="responsive-img">
              </div>
            </div>
            <div class="col s12 m2">
              <div class="card-panel parceiros">
                <img src="images/observatorio.jpeg" alt="Imagem 5" class="responsive-img">
              </div>
            </div>
          </div>
          <p class="center-align">Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
          <div class="center-align">
            <a href="#!" class="text-darken-3">ver mais</a>
          </div>
        </div>
      </section>
      <!-- Seção: Entre em contato com a gente -->
      <section class="section white">
        <div class="container">
          <h4 class="center-align text-darken-3">Entre em contato com a gente!</h4>
          <div class="row">
            <div class="col s12 m6">
              <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
              <div class="center-align">
                <a href="#!" class="text-darken-3">ver mais</a>
              </div>
            </div>
            <div class="col s12 m6 center-align">
              <img src="/images/contato.png" alt="Ícone de contato" class="responsive-img" style="max-width: 150px;">
            </div>
          </div>
        </div>
      </section>
  `;

  reinicializarMaterialize();
}
