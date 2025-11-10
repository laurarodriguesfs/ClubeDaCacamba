// js/admin/api/users.js
async function listarProjetos() {
  const $tableBody = $('#project-table-body');
  try {
    const token = localStorage.getItem('authToken');


    const response = await fetch(`${API_URL}/project`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Falha ao buscar projetos.');
    const projects = await response.json();
    
    $tableBody.empty();
    projects.forEach(project => 
    {
      const rowHTML = `
        <tr class="linha">
            <td>${project.titulo}</td>
            <td>temporário</td>
            <td class="status-cell">${project.status}</td>
            <td class="actions-cell">
                <button class="edit-link" data-id="${project.id}">Editar</button>
                <button class="delete-link" data-id="${project.id}">Excluir</button>
                <button class="view-link" data-id="${project.id}">Ver Página</button>
            </td>
        </tr>`;
      $tableBody.append(rowHTML);
    });

    $(document).on('click', '.edit-link', function() 
    {
      const id = $(this).data('id');
      editarProject(id);
    });

    $(document).on('click', '.delete-link', function() 
    {
      const id = $(this).data('id');
      excluirProjeto(id);
    });

    $(document).on('click', '.view-link', function() 
    {
      const id = $(this).data('id');
      verProjetoUnico(id);
    });

  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    $tableBody.html(`<tr><td colspan="4" class="center-align red-text">${error.message}</td></tr>`);
  }
}

async function excluirProjeto(id)
{
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/project/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error('Falha ao excluir projeto.');
    
    // Recarregar a lista após exclusão
    listarProjetos();
  } catch (error) {
    console.error("Erro ao excluir projeto:", error);
    alert('Erro ao excluir projeto: ' + error.message);
  }
}

async function verProjetoUnico(id) {
  const $mainContainer = getMainContainer();
  $mainContainer.empty();

  try {
    // Faz a requisição do projeto específico
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/project/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Falha ao carregar o projeto.');

    const projeto = await response.json();
    const imagemProjeto = projeto.image;
    // Monta o HTML com os dados retornados
    const verProjetoHTML = `
      <div class="container gerenciar-usuarios" style="padding-top: 5vh;">
        <div class="div-botoes">
          <button id="back-to-manage-project-btn" class="valign-wrapper btn-flat waves-effect">
            <i class="material-icons left">arrow_back</i>Voltar ao Gerenciar Projetos
          </button>
        </div>

        <h1 class="header">Visualizar Projeto</h1>

        <div class="section">
          <h4>${projeto.titulo}</h4>
          <div class="row">
            <div class="col s12 l6">
              <img class="single-projeto card-image responsive-img" 
                   src="${projeto.image}" 
                   alt="${projeto.titulo}">
            </div>
            <div class="col s12 l6">
              <p>${projeto.conteudo}</p>
              <p><strong>Status:</strong> ${projeto.status}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    $mainContainer.html(verProjetoHTML);

    // Voltar à tela de gerenciamento
    $('#back-to-manage-project-btn').on('click', carregaPagGerenciadorProjetos);

  } catch (error) {
    console.error("Erro ao carregar projeto:", error);
    $mainContainer.html(`
      <div class="container center-align" style="padding: 10vh;">
        <p class="red-text">${error.message}</p>
        <button id="back-to-manage-project-btn" class="btn-flat waves-effect">
          <i class="material-icons left">arrow_back</i>Voltar
        </button>
      </div>
    `);
    $('#back-to-manage-project-btn').on('click', carregaPagGerenciadorProjetos);
  }
}
