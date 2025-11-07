// js/admin/api/users.js
async function fetchUsers() {
  const $tableBody = $('#user-table-body');
  try {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${API_URL}/user`, {
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
          <td><button class="btn-small waves-effect waves-light red">Deletar</button></td>
        </tr>`;
      $tableBody.append(rowHTML);
    });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    $tableBody.html(`<tr><td colspan="4" class="center-align red-text">${error.message}</td></tr>`);
  }
}