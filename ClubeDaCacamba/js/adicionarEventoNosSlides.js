export default function adicionarEventoNosSlides() {
  const slides = document.querySelectorAll(".carousel-item");
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const id = slide.dataset.id;
      window.location.hash = `#/projeto/${id}`;
    });
  });
}
