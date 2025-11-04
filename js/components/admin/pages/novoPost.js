// js/components/admin/pages/novoPost.js

function newPost(){
	const newPost = document.querySelector("#main");
	newPost.innerHTML = `
		<div class="flex-container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-post-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
					</button>
				</p>
				<form>
					<div class="top">
						<h2>Criação de Novo Post</h2>
						<input type="button" name="Publicar" value="Publicar">
					</div>
					<div class="projInput">
						<p>Titulo do Post</p>
						<input type="text" name="titulo" placeholder="Ex: Projeto A que constitue em ..." required>

						<p>Descrição Curta</p>
						<div id="desc"></div>

						<p>Conteúdo Completo do Post</p>
						<div id="conteudo"></div>
					</div>
				</form>
			</div>
		</div> 
	`
	const toolbarDesc = ['bold', 'italic', 'underline', 'strike'];

	const desc = new Quill('#desc', {
		modules: {
			toolbar: toolbarDesc
		},
		theme: 'snow',
	});

	const conteudo = new Quill('#conteudo', {
		theme: "snow"
	})

	$('#back-to-post-btn').on('click', carregaPagGerenciadorposts)
}