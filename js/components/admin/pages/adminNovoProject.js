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
						<input type="text" id="titulo" name="titulo" placeholder="Ex: Projeto A que constitue em ..." required>

						<p>Descrição Curta</p>
						<input type="text" id="descricao" name="descricao" placeholder="Ex: Projeto A que constitue em ..." required>
						<div id="desc" required></div>

						<p>Conteúdo Completo do Projeto</p>
						<div id="conteudo"></div>
					</div>
				</form>
			</div>
		</div> 
	`
	const toolbarDesc = ['bold', 'italic', 'underline', 'strike'];

	const conteudo = new Quill('#conteudo', {
		theme: "snow"
	})

	$('#back-to-project-btn').on('click', carregaPagGerenciadorProjetos)

	document.querySelector('#new-project-form').addEventListener('submit', async (e) => 
	{
		e.preventDefault();

		
		const titulo = document.querySelector('#titulo').value.trim();
		const descricao = document.querySelector('#descricao').value.trim();
		const conteudoCompleto = conteudo.root.innerHTML.trim();


		const projetoData = 
		{
			titulo,
			descricao,
			conteudo: conteudoCompleto,
			status: "ativo"
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
			M.toast({ html: 'Projeto criado com sucesso!' }); // se estiver usando Materialize
			console.log('Projeto criado:', result);
			
			carregaPagGerenciadorProjetos();
		} catch(error)
		{
			console.error(error);
			M.toast({ html: 'Erro ao criar o projeto!' });
		}
	});



}