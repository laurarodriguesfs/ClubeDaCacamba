// js/components/admin/pages/novoPost.js

function newPost(){
	const newPost = document.querySelector("#main");
	newPost.innerHTML = `
		<div class="container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-manage-post-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
					</button>
				</p>
				<form id="new-post-form" method="POST">
					<div class="top">
						<h2>Criação de Novo Post</h2>
						<input type="submit" value="Publicar">
					</div>
					<div class="projInput">
						<p>Titulo do Post</p>
						<input type="text" id="titulo" name="titulo" placeholder="Ex: Post A que constitue em ..." required>

						<p>Descrição Curta</p>
						<input type="text" id="descricao" name="descricao" placeholder="Ex: Post A que constitue em ..." required>

						<p>Link da Imagem</p>
						<input type="url" id="imagem" name="imagem" placeholder="https://picsum.photos/200" required>

						<p>Conteúdo Completo do Post</p>
						<div id="conteudo"></div>
						
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

	const conteudo = new Quill('#conteudo', {
		theme: "snow"
	})

	// Inicializa o select do Materialize (se estiver usando)
	if (M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('#status'));

	$('#back-to-manage-post-btn').on('click', carregaPagGerenciadorPosts)

	document.querySelector('#new-post-form').addEventListener('submit', async (e) => 
	{
		e.preventDefault();

		
		const titulo = document.querySelector('#titulo').value.trim();
		const descricao = document.querySelector('#descricao').value.trim();
		const imagem = document.querySelector('#imagem').value.trim();
		const conteudoCompleto = conteudo.root.innerHTML.trim();
		const statusSelecionado = document.querySelector('#status').value;

		

		const postData = 
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
			const response = await fetch(`${API_URL}/blog`, {
				method: "POST",
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(postData)
			});
			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Erro ao criar post: ${errorText}`);
			}

			const result = await response.json();
			M.toast({ html: 'Post criado com sucesso!' }); 
			console.log('Post criado:', result);
			
			carregaPagGerenciadorPosts();
		} catch(error)
		{
			console.error(error);
			M.toast({ html: 'Erro ao criar o post!' });
		}
	});
}