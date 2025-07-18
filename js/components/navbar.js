export default function navbar(){
    
const navbar = document.querySelector("#navbar")

navbar.innerHTML=`
    <div class="row valign-wrapper green lighten-4" style="margin: 0;">
      <!-- Logo -->
      <div class="col s3 m3 offset-m1">
        <a href="#home">
          <img class="logo-clube" src="images/logo-clube.png" alt="Logo do Clube">
        </a>
      </div>

      <!-- Bloco das redes e menu -->
      <div class="col s9 teste">
        <!-- Barra de redes -->
        <div class="row barra-redes right-align hide-on-med-and-down" style="padding: 0.5rem;">
          <div class="col s11 valign-wrapper" style="margin: 0 0; padding: 0;">
            <div class="col s10  right-align" style="margin-left: 0; padding: 0">
              <span class=" texto-bright green-text text-darken-3">Nos encontre nas redes sociais</span>
            </div>
            <div class="col s2 social-icons">
              <a href="https://www.facebook.com/Clubedacacamba.uel/" target="_blank" rel="noopener noreferrer"class="icon facebook" aria-label="Facebook"></a>
              <a href="https://www.instagram.com/clubedacacamba.uel/" target="_blank" rel="noopener noreferrer"class="icon instagram" aria-label="Instagram"></a>
            </div>
          </div>
        </div>

        <!-- Menu de navegação -->
        <nav class="row lighten-4" style="box-shadow: none;">
          <div class="col s11">
            <a href="#" data-target="mobile-menu" class="sidenav-trigger green-text text-darken-3 right"><i class="material-icons">menu</i></a>
            <ul class="col right hide-on-med-and-down" style="padding: 0">
              <li><a href="#home" class="menu-item green-text text-darken-3">Início</a></li>
              <li><a href="#sobre" class="menu-item green-text text-darken-3">Sobre</a></li>
              <li><a href="#projetos" class="menu-item green-text text-darken-3">Projetos e eventos</a></li>
              <li><a href="#blog" class="menu-item green-text text-darken-3">Blog</a></li>
              <li><a href="#parceiros" class="menu-item green-text text-darken-3">Parceiros</a></li>
              <li><a href="#contato" class="menu-item green-text text-darken-3">Contato</a></li>
            </ul>



            <ul id="mobile-menu" class="menu-item sidenav">
              <li class="fechar-sidenav-container right-align">
                <button class="btn-fechar-sidenav btn-flat green-text text-darken-3">
                  <i class="material-icons">close</i>
                </button>
              </li>
              <li><a href="#home" class="menu-item green-text text-darken-3">Início</a></li>
              <li><a href="#sobre" class="menu-item green-text text-darken-3">Sobre</a></li>
              <li><a href="#projetos" class="menu-item green-text text-darken-3">Projetos e eventos</a></li>
              <li><a href="#blog" class="menu-item green-text text-darken-3">Blog</a></li>
              <li><a href="#parceiros" class="menu-item green-text text-darken-3">Parceiros</a></li>
              <li><a href="#contato" class="menu-item green-text text-darken-3">Contato</a></li>
              <div class="barra-redes" style="padding: 0.5rem;">
                <div class="row">
                  <div class="col s12 center">
                    <span class=" texto-bright green-text text-darken-3">Nos encontre nas redes sociais</span>
                  </div>
                  <div class="col s12 social-icons">
                    <a href="https://www.facebook.com/Clubedacacamba.uel/" target="_blank" rel="noopener noreferrer"class="icon facebook" aria-label="Facebook"></a>
                    <a href="https://www.instagram.com/clubedacacamba.uel/" target="_blank" rel="noopener noreferrer"class="icon instagram" aria-label="Instagram"></a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
`;

  document.addEventListener('DOMContentLoaded', function() {
  const btnFechar = document.querySelector('.btn-fechar-sidenav');
  if (btnFechar) {
    btnFechar.addEventListener('click', function() {
      // Fecha o sidenav usando a instância do Materialize
      const sidenavInstance = M.Sidenav.getInstance(document.getElementById('mobile-menu'));
      if (sidenavInstance) {
        sidenavInstance.close();
      } else {
        // Fallback: Fecha manualmente (se o Materialize não estiver inicializado)
        document.getElementById('mobile-menu').style.transform = 'translateX(-100%)';
      }
    });
  }
});
}

