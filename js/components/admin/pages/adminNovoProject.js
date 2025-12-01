// js/components/pageNewProject.js

function newProject(){
	const newProject = document.querySelector("#main");
	newProject.innerHTML = `
		<div class="container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-project-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
					</button>
				</p>
				<form id="new-project-form" method="POST">
					<div class="top">
						<h2>Criação de Novo Projeto</h2>
						<input type="submit" value="Publicar">
					</div>
					<div class="projInput">
						<p>Titulo do Projeto</p>
						<input type="text" id="titulo-proj" name="titulo-proj" placeholder="Ex: Projeto A que constitue em ..." required>

						<p>Descrição Curta</p>
						<input type="text" id="descricao-proj" name="descricao-proj" placeholder="Ex: Projeto A que constitue em ..." required>

						<p>Link da Imagem</p>
						<input type="url" id="imagem-proj" name="imagem-proj" placeholder="https://picsum.photos/200" required>

						<p>Conteúdo Completo do Projeto</p>
						<div id="conteudo-proj"></div>
						
						<p>Status:</p>
						<select id="status" name="status" required>
							<option value="Visível">Visível</option>
							<option value="Oculto">Oculto</option>
							<option value="Revisão">Revisão</option>
							<option value="Arquivado">Arquivado</option>
						</select>
						
					</div>
				</form>
			</div>
		</div> 
	`

	const conteudo = new Quill('#conteudo-proj', {
		theme: "snow"
	})

	// Inicializa o select do Materialize (se estiver usando)
	if (M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('#status'));

	$('#back-to-project-btn').on('click', carregaPagGerenciadorProjetos)

	document.querySelector('#new-project-form').addEventListener('submit', async (e) => 
	{
		e.preventDefault();

		
		const titulo = document.querySelector('#titulo-proj').value.trim();
		const descricao = document.querySelector('#descricao-proj').value.trim();
		const imagem = document.querySelector('#imagem-proj').value.trim();
		const conteudoCompleto = conteudo.root.innerHTML.trim();
		const statusSelecionado = document.querySelector('#status').value;
		

		const projetoData = 
		{
			titulo,
			descricao,
			conteudo: conteudoCompleto,
			image: imagem,
			status: statusSelecionado
		};


		try
		{
			const token = localStorage.getItem('authToken');
			const response = await fetch(`${API_URL}/project`, {
				method: "POST",
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(projetoData)
			});
			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Erro ao criar projeto: ${errorText}`);
			}

			const result = await response.json();
			M.toast({ html: 'Projeto criado com sucesso!' });
			console.log('Projeto criado:', result);
			
			carregaPagGerenciadorProjetos();
		} catch(error)
		{
			console.error(error);
			M.toast({ html: 'Erro ao criar o projeto!' });
		}
	});



}