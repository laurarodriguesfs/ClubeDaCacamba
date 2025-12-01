function carregaPagGerenciadorProjetos(){
	const $mainContainer = getMainContainer();
	
	const projetosHTML = `
		<div class="flex-container xl-1">
			<div class="proj">
				<div class="div-botoes">
					<button id="back-to-dashboard-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Dashboard
					</button>
					<button id="new-project-btn">
						<i class="material-icons">add</i>
						Adicionar novo conteúdo
					</button>
				</div>

				<div class="top">
					<h2>Gerenciador de Projetos e Eventos</h2>
					
				</div>

				<table class="project-table striped">
					<thead>
						<tr>
							<th>Título</th>
							<th>Data de Conclusão</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody id="project-table-body">
						<tr><td colspan="4">Carregando...</td></tr>
					</tbody>
				</table>

			</div>

		</div>
	`
	$mainContainer.html(projetosHTML);
	$('#back-to-dashboard-btn').on('click', renderDashboardPage);
	$('#new-project-btn').on('click', newProject);
	listarProjetos();
}
