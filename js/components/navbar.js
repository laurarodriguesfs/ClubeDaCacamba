export default function navbar(){
    
const navbar = document.querySelector("#navbar")

navbar.innerHTML=`
    <div class="row valign-wrapper green lighten-4" style="margin: 0;">
      <!-- Logo -->
      <div class="col s3 m3 offset-m1">
        <a href="#home">
          <img class="logo-clube" src="/images/logo-clube.png" alt="Logo do Clube">
        </a>
      </div>

      <!-- Bloco das redes e menu -->
      <div class="col s9">
        <!-- Barra de redes -->
        <div class="row barra-redes right-align" style="padding: 0.5rem;">
          <div class="col s11 valign-wrapper" style="margin: 0 0; padding: 0;">
            <div class="col s10  right-align" style="margin-left: 0; padding: 0">
              <span class="green-text text-darken-3">Nos encontre nas redes sociais</span>
            </div>
            <div class="col s2 center" style="margin-left: 0; padding: 0">
              <a href="#!" class="green-text text-darken-3 " style="margin: 0 5px;"><i class="fab fa-facebook material-icons">facebook</i></a>
              <a href="#!" class="green-text text-darken-3 " style="margin: 0 5px;"><i class="fab fa-facebook material-icons">facebook</i></a>
            </div>
          </div>
        </div>

        <!-- Menu de navegação -->
        <nav class="row green lighten-4" style="box-shadow: none;">
          <div class="col s11">
            <a href="#" data-target="mobile-menu" class="sidenav-trigger green-text text-darken-3 right"><i class="material-icons">menu</i></a>
            <ul class="col right hide-on-med-and-down" style="padding: 0">
              <li><a href="#home" class="green-text text-darken-3">Início</a></li>
              <li><a href="#sobre" class="green-text text-darken-3">Sobre</a></li>
              <li><a href="#projetos" class="green-text text-darken-3">Projetos</a></li>
              <li><a href="#blog" class="green-text text-darken-3">Blog</a></li>
              <li><a href="#parceiros" class="green-text text-darken-3">Parceiros</a></li>
              <li><a href="#contato" class="green-text text-darken-3">Contato</a></li>
            </ul>



            <ul id="mobile-menu" class="sidenav">
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
`;
}