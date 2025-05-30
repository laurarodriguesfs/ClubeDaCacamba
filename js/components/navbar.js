export default function navbar(){
    
const navbar = document.querySelector("#navbar")

navbar.innerHTML=`
<div class="container">
    <div class="row valign-wrapper green lighten-4" style="margin: 0;">
      <!-- Logo -->
      <div class="col s12 m3">
        <a href="#!">
          <img src="logo.png" alt="Logo do Clube" style="width: 100%; height: auto; display: block;">
        </a>
      </div>

      <!-- Bloco das redes e menu -->
      <div class="col s12 m9">
        <!-- Barra de redes -->
        <div class="" style="padding: 0.5rem;">
          <div class="row valign-wrapper" style="margin: 0;">
            <div class="col s6 left-align">
              <span class="green-text text-darken-3">Nos encontre nas redes sociais</span>
            </div>
            <div class="col s6 right-align">
              <a href="#!" class="green-text text-darken-3"><i class="fab fa-facebook"></i></a>
              <a href="#!" class="green-text text-darken-3"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <!-- Menu de navegação -->
        <nav class="green lighten-4" style="box-shadow: none;">
          <div class="nav-wrapper">
            <a href="#" data-target="mobile-menu" class="sidenav-trigger green-text text-darken-3">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#!" class="green-text text-darken-3">Início</a></li>
              <li><a href="#!" class="green-text text-darken-3">Sobre</a></li>
              <li><a href="#!" class="green-text text-darken-3">Projetos</a></li>
              <li><a href="#!" class="green-text text-darken-3">Blog</a></li>
              <li><a href="#!" class="green-text text-darken-3">Parceiros</a></li>
              <li><a href="#!" class="green-text text-darken-3">Contato</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>

`;
}