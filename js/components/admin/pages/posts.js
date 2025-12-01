function carregaPagGerenciadorPosts(){
	const $mainContainer = getMainContainer();
	
	const postsHTML = `
		<div class="flex-container">
			<div class="proj">
				<div class="div-botoes">
					<button id="back-to-dashboard-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Dashboard
					</button>
					<button id="new-post-btn">
						<i class="material-icons">add</i>
						Adicionar novo conteúdo
					</button>
				</div>

				<div class="top">
					<h2>Gerenciador de posts e Eventos</h2>
				</div>

				<table class="project-table striped">
					<thead>
						<tr>
							<th>Título</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody id="post-table-body">
						<tr><td colspan="4">Carregando...</td></tr>
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
