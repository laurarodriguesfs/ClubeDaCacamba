// js/components/pageNewProject.js

function newProject(){
	const newProject = document.querySelector("#main");
	newProject.innerHTML = `
		<div class="flex-container">
			<div class="proj">
				<p class="voltar">
					<i class="material-icons">arrow_back</i>
					<a href="#sobre">Voltar ao Gerenciador</a>
				</p>
				<form>
					<div class="top">
						<h2>Criação de Novo Projeto</h2>
						<input type="button" name="Publicar" value="Publicar">
					</div>
					<div class="projInput">
						<p>Titulo do Projeto</p>
						<input type="text" name="titulo" placeholder="Ex: Projeto A que constitue em ..." required>

						<p>Descrição Curta</p>
						<div id="desc"></div>

						<p>Conteúdo Completo do Projeto</p>
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
}
