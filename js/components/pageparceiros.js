export default function parceiros (){
 
const main = document.querySelector("#main")
  
main.innerHTML=`
 <div class="container">
    <div class="section">
      <h1>Uma rede de parceiros</h1>
      
        <div class="logos">
          <img src="observatorio.JPG" alt="Observatório de Resíduos">
          <img src="ninter.JPG" alt="Ninter UEL">
          <img src="lonarte.JPG" alt="Lonarte">
          <img src="leca.JPG" alt="LECA">
          <img src="desplastifica.JPG" alt="Desplastifica UEL">
        </div>
      
        <div class="subtitulo">
          Venha começar<br />
          uma parceria com a gente!
        </div>
      
        <p class="paragrafo">
          Somos membros de um projeto vinculado<br />
          à Universidade Estadual de Londrina (UEL)<br />
          promovemos conhecimento científico<br />
          sobre desenvolvimento sustentável.
        </p>
      
        <a href="#parceiros" class="vermais">Ver mais</a>
      
        <!-- Âncora do link -->
        <div id="parceiros" style="margin-top: 100px;">
        </div>
       </div>
      </div>
`;
}
