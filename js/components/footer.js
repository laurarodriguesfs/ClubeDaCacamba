export default function footer() {
  const footer = document.querySelector("#footer");

  footer.innerHTML = ` 
    <footer class="page-footer green lighten-4">
    <div class="container">
      <div class="row">
        <!-- Coluna: Endereço -->
        <div class="col s12 m4">
          <h5 class="text-darken-3">Clube da Caçamba</h5>
          <address>
            Rodovia Celso Garcia Cid<br>
            PR-445, km 380<br>
            Campus Universitário<br>
            PR, 86057-970
          </address>
        </div>

        <!-- Coluna: Menu -->
        <div class="col s12 m4">
          <div class="footer-menu-columns">
            <ul class="footer-column">
              <li><a href="#home" class="text-darken-3">Início</a></li>
              <li><a href="#sobre" class="text-darken-3">Sobre</a></li>
              <li><a href="#projetos" class="text-darken-3">Projetos</a></li>
            </ul>
            <ul class="footer-column">
              <li><a href="#blog" class="text-darken-3">Blog</a></li>
              <li><a href="#parceiros" class="text-darken-3">Parceiros</a></li>
              <li><a href="#contato" class="text-darken-3">Contato</a></li>
            </ul>
          </div>
        </div>

        <!-- Coluna: Redes Sociais -->
        <div class=" redes-col right-align col s12 m4 ">
          <span class="texto-redes texto-bright text-darken-3 redes">Nos encontre nas redes sociais</span>
          <div class="social-icons">
            <a href="https://www.facebook.com/Clubedacacamba.uel/" class="icon facebook" aria-label="Facebook"></a>
            <a href="https://www.instagram.com/clubedacacamba.uel/" class="icon instagram" aria-label="Instagram"></a>
          </div>
        </div>
      </div>
    </div>

  </footer>
  `;
}