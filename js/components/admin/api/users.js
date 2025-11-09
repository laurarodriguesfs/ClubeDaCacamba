// js/admin/api/users.js
async function fetchUsers() {
  const $tableBody = $('#user-table-body');
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/users`, {
      headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('Falha ao buscar usuários.');
    const users = await response.json();
    
    $tableBody.empty();
    users.forEach(user => {
      const rowHTML = `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><button class="btn-small waves-effect waves-light blue edit-btn" data-id="${user.id}">Editar</button></td>
					<td><button class="btn-small waves-effect waves-light red delete-btn" data-id="${user.id}">Deletar</button></td>
        </tr>`;
      $tableBody.append(rowHTML);
    });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    $tableBody.html(`<tr><td colspan="4" class="center-align red-text">${error.message}</td></tr>`);
  }
}
// 🔹 Ação de deletar usuário
$(document).on('click', '.delete-btn', function() {
	const id = $(this).data('id');
	excluirUsario(id);
});

async function excluirUsario(id)
{
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error('Falha ao excluir o Usuário.');
    
    // Recarregar a lista após exclusão
    fetchUsers();
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    alert('Erro ao excluir usuário: ' + error.message);
  }
}
