export default function parceiros (){
 
const main = document.querySelector("#main")
  
main.innerHTML=`
 <div class="page-parceiros container">
    <div class="section">
      <h1>Uma rede de parceiros</h1>
      
        <div class="logos">
          <img src="images/observatorio.jpeg" alt="Observatório de Resíduos">
          <img src="images/ninter.jpeg" alt="Ninter UEL">
          <img src="images/lunarte.jpeg" alt="Lonarte">
          <img src="images/leca.jpeg" alt="LECA">
          <img src="images/desplastifica.jpeg" alt="Desplastifica UEL">
        </div>
      
        <h4>
          Venha começar<br />
          uma parceria com a gente!
        </h4>
      
        <div class="parceiros-texto-link">
  <p class="paragrafo">
    Somos membros de um projeto vinculado </br>
     à Universidade Estadual de Londrina (UEL),</br>
    promovemos conhecimento científico </br>
     sobre desenvolvimento sustentável.
  </p>
  <a href="#contato" class="vermais">Ver mais</a>
</div>
´;
}
