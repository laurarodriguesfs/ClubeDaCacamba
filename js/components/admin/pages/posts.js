function carregaPagGerenciadorPosts(){
	const $mainContainer = getMainContainer();
	
	const postsHTML = `
		<div class="flex-container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-dashboard-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Dashboard
					</button>
				</p>

				<div class="top">
					<h2>Gerenciador de posts e Eventos</h2>
					<button id="new-post-btn">
						<i class="material-icons">add</i>
						Adicionar novo conteúdo
					</button>
				</div>

				<table class="project-table centered">
					<thead>
						<tr>
							<th>Título</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody id="post-table-body">
						<tr class="linha">
							<td>Apresentação de pôster no III ...</td>
							<td>01/01/2025</td>
							<td class="status-cell status-visible">Visível</td>
							<td class="actions-cell">
								<a href="#" class="edit-link">Editar</a>
								<a href="#" class="delete-link">Excluir</a>
								<a href="#" class="view-link">Ver Página</a>
							</td>
						</tr>

						<tr class="linha">
							<td>Apresentação de pôster no III ...</td>
							<td>01/01/2025</td>
							<td class="status-cell status-hidden">Oculto</td>
							<td class="actions-cell">
								<a href="#" class="edit-link">Editar</a>
								<a href="#" class="delete-link">Excluir</a>
								<a href="#" class="view-link">Ver Página</a>
							</td>
						</tr>

						<tr class="linha">
							<td>Apresentação de pôster no III ...</td>
							<td>01/01/2025</td>
							<td class="status-cell status-review">Revisão</td>
							<td class="actions-cell">
								<a href="#" class="edit-link">Editar</a>
								<a href="#" class="delete-link">Excluir</a>
								<a href="#" class="view-link">Ver Página</a>
							</td>
						</tr>
					</tbody>
				</table>

			</div>

		</div>
	`
	$mainContainer.html(postsHTML);
	$('#back-to-dashboard-btn').on('click', renderDashboardPage);
	$('#new-post-btn').on('click', newPost);
	listarPosts();
}
