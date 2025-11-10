// js/components/admin/api/posts.js

async function listarPosts() {
  const $tableBody = $('#post-table-body');
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/blog`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Falha ao buscar usuários.');
    const posts = await response.json();
    
    $tableBody.empty();
    posts.forEach(post => 
    {
      const rowHTML = `
        <tr class="linha">
            <td>${post.titulo}</td>
            <td>temporário</td>
            <td class="status-cell">${post.status}</td>
            <td class="actions-cell">
                <button class="edit-link" data-id="${post.id}">Editar</button>
                <button class="delete-link" data-id="${post.id}">Excluir</button>
                <button class="view-link" data-id="${post.id}">Ver Página</button>
            </td>
        </tr>`;
      $tableBody.append(rowHTML);
    });

    $(document).on('click', '.edit-link', function() 
    {
      const id = $(this).data('id');
      editarPost(id);
    });

    $(document).on('click', '.delete-link', function() 
    {
      const id = $(this).data('id');
      excluirPost(id);
    });

    $(document).on('click', '.view-link', function() 
    {
      const id = $(this).data('id');
      verPostUnico(id);
    });

  } catch (error) {
    console.error("Erro ao buscar Posts:", error);
    $tableBody.html(`<tr><td colspan="4" class="center-align red-text">${error.message}</td></tr>`);
  }
}

async function excluirPost(id)
{
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/blog/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error('Falha ao excluir post.');
    
    // Recarregar a lista após exclusão
    listarPosts();
  } catch (error) {
    console.error("Erro ao excluir post:", error);
    alert('Erro ao excluir post: ' + error.message);
  }
}

async function verPostUnico(id) {
  const $mainContainer = getMainContainer();
  $mainContainer.empty();

  try {
    // Faz a requisição do post específico
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/blog/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Falha ao carregar o post.');

    const post = await response.json();

    // Monta o HTML com os dados retornados
    const verPostHTML = `
      <div class="container gerenciar-usuarios" style="padding-top: 5vh;">
        <div class="div-botoes">
          <button id="back-to-manage-post-btn" class="valign-wrapper btn-flat waves-effect">
            <i class="material-icons left">arrow_back</i>Voltar ao Gerenciar Posts
          </button>
        </div>

        <h1 class="header">Visualizar Post</h1>

        <div class="section">
          <h4>${post.titulo}</h4>
          <div class="row">
            <div class="col s12 l6">
              <img class="single-projeto card-image responsive-img" 
                   src="${post.image}" 
                   alt="${post.titulo}">
            </div>
            <div class="col s12 l6">
              <p>${post.descricao}</p>
              <p>${post.conteudo}</p>
              <p><strong>Status:</strong> ${post.status}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    $mainContainer.html(verPostHTML);

    // Voltar à tela de gerenciamento
    $('#back-to-manage-post-btn').on('click', carregaPagGerenciadorPosts);

  } catch (error) {
    console.error("Erro ao carregar post:", error);
    $mainContainer.html(`
      <div class="container center-align" style="padding: 10vh;">
        <p class="red-text">${error.message}</p>
        <button id="back-to-manage-post-btn" class="btn-flat waves-effect">
          <i class="material-icons left">arrow_back</i>Voltar
        </button>
      </div>
    `);
    $('#back-to-manage-post-btn').on('click', carregaPagGerenciadorPosts);
  }
}
