export function reinicializarMaterialize() {
  // Inicializa o parallax
  const parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);

  // Inicializa o carrossel
  const carousels = document.querySelectorAll('.carousel');
  M.Carousel.init(carousels, {
    fullWidth: true,
    indicators: true
  });

  // Setas customizadas
  const instance = M.Carousel.getInstance(carousels[0]);

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    instance.prev();
  });

  document.querySelector('.carousel-next').addEventListener('click', () => {
    instance.next();
  });
}