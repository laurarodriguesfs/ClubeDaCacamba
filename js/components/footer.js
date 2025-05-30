export default function footer() {
    const footer = document.querySelector("#footer");
  
    footer.innerHTML = ` 
      <footer class="page-footer green lighten-4">
      <div class="container">
        <div class="row">
          <div class="col s12 m6">
            <h5 class="green-text text-darken-3">Clube da Caçamba</h5>
            <ul>
              <li><a href="#!" class="green-text text-darken-3">Início</a></li>
              <li><a href="#!" class="green-text text-darken-3">Sobre</a></li>
              <li><a href="#!" class="green-text text-darken-3">Projetos</a></li>
              <li><a href="#!" class="green-text text-darken-3">Blog</a></li>
              <li><a href="#!" class="green-text text-darken-3">Parceiros</a></li>
              <li><a href="#!" class="green-text text-darken-3">Contato</a></li>
            </ul>
          </div>
          <div class="col s12 m6 right-align">
            <h6 class="green-text text-darken-3">Nos encontre nas redes sociais</h6>
            <a href="#!" class="green-text text-darken-3"><i class="material-icons">facebook</i></a>
            <a href="#!" class="green-text text-darken-3"><i class="material-icons">instagram</i></a>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
  