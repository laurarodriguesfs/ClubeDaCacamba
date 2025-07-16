export default function sobre (){
const main = document.querySelector("#main")

main.innerHTML=`
   <div id="main" class="page-sobre container">
      <h1 class="center-align">História</h1>
      <p>O Clube da Caçamba foi criado e idealizado pela Professora Doutora Verônica Bender Haydu e desenvolvido pelos estagiários do curso de Psicologia da Universidade Estadual de Londrina (UEL), estudantes de iniciação científica e alunos do doutorado em Análise do Comportamento. O objetivo do projeto é divulgar conhecimentos científicos sobre temáticas socioambientais e nosso referencial teórico é a Análise do Comportamento. O nome “Clube da Caçamba” deriva de nosso interesse em sensibilizar nosso público sobre o adequado tratamento e destinação de resíduos sólidos. Atualmente, além de produzirmos postagens em nossas páginas do Instagram e do Facebook, também realizamos publicações científicas em revistas e eventos e trabalhamos com atividades interativas para sensibilização ambiental do público universitário.</p>

      <h1 class="center-align">Objetivos</h1>
      <ul class="collapsible popout">
        <li>
          <div class="collapsible-header">Divulgação científica<i class="material-icons">add_circle</i></div>
          <div class="collapsible-body"><span>Realizar a divulgação científica de diferentes temas da área do desenvolvimento sustentável, com foco na destinação adequada de resíduos.</span></div>
        </li>
        <li>
          <div class="collapsible-header">Rede colaborativa<i class="material-icons">add_circle</i></div>
          <div class="collapsible-body"><span>Estabelecer uma metacontingência para a promoção de contingências entrelaçadas entre professores, estudantes e seguidores do projeto que produzam um produto agregado e consequências culturais. Ou seja, criar relações que se mantenham e que sejam passadas entre gerações.</span></div>
        </li>
        <li>
          <div class="collapsible-header">Modelo replicável<i class="material-icons">add_circle</i></div>
          <div class="collapsible-body"><span>Fornecer modelo para que projetos semelhantes sejam criados em outras instituições de ensino.</span></div>
        </li>
      </ul>

      <h1 class="center-align">Membros</h1>
      <div class="row">
        <div class="col s6 l2 offset-l2 membro-div">
          <div><img class="foto-membros" src="images/Membros/Aline.jpg" alt="foto de perfil"></div>
          <p>Aline</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div">
          <div><img class="foto-membros" src="images/Membros/Ana Clara Barreto.jpg" alt="foto de perfil"></div>
          <p>Ana Clara Barreto</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div">
          <div><img class="foto-membros" src="images/Membros/Ana Clara.jpg" alt="foto de perfil"></div>
          <p>Ana Clara</p>
          <p></p>
        </div>
        <div class="col s6 l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Ana Paula.jpg" alt="foto de perfil"></div>
          <p>Ana Paula</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Ananda Flora.jpg" alt="foto de perfil"></div>
          <p>Ananda Flora</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Daniela Santos.jpg" alt="foto de perfil"></div>
          <p>Daniela Santos</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Débora.jpg" alt="foto de perfil"></div>
          <p>Débora</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Dikiely.jpg" alt="foto de perfil"></div>
          <p>Dikiely</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Eduardo.jpg" alt="foto de perfil"></div>
          <p>Eduardo</p>
          <p></p>
        </div>
        <div class="col s6 l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Gabriela Moreto.jpg" alt="foto de perfil"></div>
          <p>Gabriela Moreto</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Giovana Ogido.jpg" alt="foto de perfil"></div>
          <p>Giovana Ogido</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Isabely Gomes.jpg" alt="foto de perfil"></div>
          <p>Isabely Gomes</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Isadora Alves.jpg" alt="foto de perfil"></div>
          <p>Isadora Alves</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Julia Cavarsan.jpg" alt="foto de perfil"></div>
          <p>Julia Cavarsan</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Julia.jpg" alt="foto de perfil"></div>
          <p>Julia</p>
          <p></p>
        </div>
        <div class="col s6 l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Julio Abner.jpg" alt="foto de perfil"></div>
          <p>Julio Abner</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Karla Medeiros.jpg" alt="foto de perfil"></div>
          <p>Karla Medeiros</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Karoline Agnes.jpg" alt="foto de perfil"></div>
          <p>Karoline Agnes</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Laura Akemi.jpg" alt="foto de perfil"></div>
          <p>Laura Akemi</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Laura Bredariol.jpg" alt="foto de perfil"></div>
          <p>Laura Bredariol</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Livia Celli.jpg" alt="foto de perfil"></div>
          <p>Livia Celli</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Milena.jpg" alt="foto de perfil"></div>
          <p>Milena</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Tielen.jpg" alt="foto de perfil"></div>
          <p>Tielen</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Prof. Hernando Neves Filho.jpg" alt="foto de perfil"></div>
          <p>Prof. Hernando Neves Filho</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Profa. Camila Muchon.jpg" alt="foto de perfil"></div>
          <p>Profa. Camila Muchon</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Profa. Maria Clara.jpg" alt="foto de perfil"></div>
          <p>Profa. Maria Clara</p>
          <p></p>
        </div>
        <div class="col s6 l2 offset-l2 membro-div margem-membro">
          <div><img class="foto-membros" src="images/Membros/Profa. Verônica Haydu.jpg" alt="foto de perfil"></div>
          <p>Profa. Verônica Haydu</p>
          <p></p>
        </div>
      </div>
  </div>
`;

  const elems = document.querySelectorAll(".collapsible");
  M.Collapsible.init(elems);

}