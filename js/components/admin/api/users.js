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

async function excluirUsario(id){
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

// Evento de clique no botão de editar
$(document).on('click', '.edit-btn', function(){
	const id = $(this).data('id');
	editarUsuario(id);
});

async function editarUsuario(id) {
	const $mainContainer = getMainContainer();
	$mainContainer.empty();

	try {
		const token = localStorage.getItem('authToken');
		const response = await fetch(`${API_URL}/users/${id}`, {
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json'
			}
		});

		if (!response.ok) throw new Error('Falha ao buscar dados do usuário.');

		const user = await response.json();

		const editarUsuarioHTML = `
		<div class="container">
			<p class="voltar">
				<button id="back-to-manage-users-btn" class="btn-flat waves-effect">
					<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
				</button>
			</p>
			<form id="edit-user-form" method="POST">
				<div class="top">
					<h2>Editar Usuário</h2>
					<input type="submit" value="Atualizar">
				</div>

				<div class="userInput">
					<p>Nome do Usuário</p>
					<input type="text" id="name" name="name" value="${user.name}" required>

					<p>Email</p>
					<input type="email" id="email" name="email" value="${user.email}" required>

					<p>Função (role)</p>
					<select id="role" name="role" required>
						<option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Administrador</option>
						<option value="editor" ${user.role === 'editor' ? 'selected' : ''}>Editor</option>
					</select>
				</div>
			</form>
		</div>
		`;

		$mainContainer.html(editarUsuarioHTML);

		// Inicializa o select do Materialize (se estiver usando)
		if (M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('select'));

		// Botão voltar
		$('#back-to-manage-users-btn').on('click', fetchUsers);

		// Submissão do formulário
		document.querySelector('#edit-user-form').addEventListener('submit', async (e) => {
			e.preventDefault();

			const nome = document.querySelector('#name').value.trim();
			const email = document.querySelector('#email').value.trim();
			const role = document.querySelector('#role').value;

			const userData = { name: nome, email, role };

			try {
				const token = localStorage.getItem('authToken');
				const response = await fetch(`${API_URL}/users/${id}`, {
					method: "PUT",
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					body: JSON.stringify(userData)
				});

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(`Erro ao atualizar usuário: ${errorText}`);
				}

				const result = await response.json();
				M.toast({ html: 'Usuário atualizado com sucesso!' });
				console.log('Usuário atualizado:', result);

				fetchUsers(); // volta pra listagem
			} catch (error) {
				console.error(error);
				M.toast({ html: 'Erro ao atualizar o usuário!' });
			}
		});

	} catch (error) {
		console.error("Erro ao carregar usuário:", error);
		$mainContainer.html(`
			<div class="container center-align" style="padding: 10vh;">
				<p class="red-text">${error.message}</p>
				<button id="back-to-manage-users-btn" class="btn-flat waves-effect">
					<i class="material-icons left">arrow_back</i>Voltar
				</button>
			</div>
		`);
		$('#back-to-manage-users-btn').on('click', fetchUsers);
	}
}
