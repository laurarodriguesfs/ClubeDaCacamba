function carregaPagGerenciadorProjetos(){
	const $mainContainer = getMainContainer();
	
	const projetosHTML = `
		<div class="flex-container">
			<div class="proj">
				<p class="voltar">
					<a href="#admin">
						<i class="material-icons">arrow_back</i>
						Voltar ao Gerenciador
					</a>
				</p>

				<div class="top">
					<h2>Gerenciador de Projetos e Eventos</h2>
					<button type="post">
						<i class="material-icons">add</i>
						Adicionar novo conteúdo
					</button>
				</div>

				<table class="project-table">
					<thead>
						<tr>
							<th>Título</th>
							<th>Data de Conclusão</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
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
	$mainContainer.html(projetosHTML);
}
