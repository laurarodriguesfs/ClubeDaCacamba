// js/components/admin/pages/editarProject.js


async function editarProject(id)
{
    const $mainContainer = getMainContainer();
    $mainContainer.empty();

    try {
        // Faz a requisição do projeto específico
        const token = localStorage.getItem('authToken');
        const response = await fetch(`${API_URL}/project/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
        });
        if (!response.ok) throw new Error('Falha ao carregar o projeto.');

        const projeto = await response.json();
        const imagemProjeto = projeto.image;
        // Monta o HTML com os dados retornados
        const editarProjetoHTML = `
        <div class="container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-manage-project-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
					</button>
				</p>
				<form id="new-project-form" method="POST">
					<div class="top">
						<h2>Criação de Novo Projeto</h2>
						<input type="submit" value="Atualizar">
					</div>
					<div class="projInput">
						<p>Titulo do Projeto</p>
						<input type="text" id="titulo" name="titulo" placeholder="Ex: Projeto A que constitue em ..." value="${projeto.titulo}" required>

						<p>Descrição Curta</p>
						<input type="text" id="descricao" name="descricao" placeholder="Ex: Projeto A que constitue em ..." value="${projeto.descricao}" required>

						<p>Link da Imagem</p>
						<input type="url" id="imagem" name="imagem" placeholder="https://picsum.photos/200" value="${projeto.image}" required>

						<p>Conteúdo Completo do Projeto</p>
						<div id="conteudo">${projeto.conteudo}</div>
						
						<p>Status:</p>
						<input type="radio" id="visivel" name="status" value="Visível" ${projeto.status === 'Visível' ? 'checked' : ''} />
						<label for="visivel" >Visível</label>
                        
						<input type="radio" id="oculto" name="status" value="Oculto" ${projeto.status === 'Oculto' ? 'checked' : ''} />
						<label for="oculto">Oculto</label>
						
                        <input type="radio" id="revisao" name="status" value="Revisão" ${projeto.status === 'Revisão' ? 'checked' : ''} />
						<label for="lorevisaouie">Revisão</label>
						
                        <input type="radio" id="arquivado" name="status" value="Arquivado" ${projeto.status === 'Arquivado' ? 'checked' : ''} />
						<label for="arquivado">Arquivado</label>
					</div>
				</form>
			</div>
		</div>
        `;

        $mainContainer.html(editarProjetoHTML);

        const conteudo = new Quill('#conteudo', {
            theme: "snow"
        });



        // Voltar à tela de gerenciamento
        $('#back-to-manage-project-btn').on('click', carregaPagGerenciadorProjetos);

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
                const response = await fetch(`${API_URL}/project/${id}`, {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(projetoData)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Erro ao atualizar projeto: ${errorText}`);
                }

                const result = await response.json();
                M.toast({ html: 'Projeto atualizado com sucesso!' }); // se estiver usando Materialize
                console.log('Projeto atualizado:', result);
                
                carregaPagGerenciadorProjetos();
            } catch(error)
            {
                console.error(error);
                M.toast({ html: 'Erro ao atualizar o projeto!' });
            }
        });

    } catch (error) {
        console.error("Erro ao carregar projeto:", error);
        $mainContainer.html(`
        <div class="container center-align" style="padding: 10vh;">
            <p class="red-text">${error.message}</p>
            <button id="back-to-manage-project-btn" class="btn-flat waves-effect">
            <i class="material-icons left">arrow_back</i>Voltar
            </button>
        </div>
        `);
        $('#back-to-manage-project-btn').on('click', carregaPagGerenciadorProjetos);
    }
}