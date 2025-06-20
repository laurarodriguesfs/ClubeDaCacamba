export default function eventoBlog() {
  const blog = document.querySelectorAll(".card");
  blog.forEach((post) => {
    post.addEventListener("click", () => {
      const id = post.dataset.id;
      window.location.hash = `#/blog/${id}`;
    });
  });
}
