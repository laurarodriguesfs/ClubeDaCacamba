export default function navbar(){
    
const navbar = document.querySelector("#navbar")

navbar.innerHTML=`
 <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#home">Inicial</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#servicos">Serviços</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#home">Inicial</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#servicos">Serviços</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</nav>
`;
}