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

						<p>Link da Imagem</p>
						<input type="url" id="imagem" name="imagem" placeholder="https://picsum.photos/200" required>

						<p>Conteúdo Completo do Projeto</p>
						<div id="conteudo"></div>
						
						<p>Status:</p>
						<input type="radio" id="visivel" name="status" value="Visível" checked />
						<label for="visivel">Visível</label>
						<input type="radio" id="oculto" name="status" value="Oculto" />
						<label for="oculto">Oculto</label>
						<input type="radio" id="revisao" name="status" value="Revisão" />
						<label for="lorevisaouie">Revisão</label>
						<input type="radio" id="arquivado" name="status" value="Arquivado" />
						<label for="arquivado">Arquivado</label>
					</div>
				</form>
			</div>
		</div> 
	`

	const conteudo = new Quill('#conteudo', {
		theme: "snow"
	})

	$('#back-to-project-btn').on('click', carregaPagGerenciadorProjetos)

	document.querySelector('#new-project-form').addEventListener('submit', async (e) => 
	{
		e.preventDefault();

		
		const titulo = document.querySelector('#titulo').value.trim();
		const descricao = document.querySelector('#descricao').value.trim();
		const imagem = document.querySelector('#imagem').value.trim();
		const conteudoCompleto = conteudo.root.innerHTML.trim();
		const statusSelecionado = document.querySelector('input[name="status"]:checked').value;
		

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