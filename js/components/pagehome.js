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

    <div class="container">
      <h3>Conheça mais sobre nós...</h3>
      <p>Somos membros de um projeto vinculado à Universidade Estadual de Londrina (UEL) promovemos conhecimento científico sobre desenvolvimento sustentável.</p>
      <a href=""> Ver mais</a>
      </div>
  `;

  reinicializarMaterialize();
}
