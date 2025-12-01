// js/components/admin/pages/editarPost.js


async function editarPost(id)
{
    const $mainContainer = getMainContainer();
    $mainContainer.empty();

    try {
        // Faz a requisição do post específico
        const token = localStorage.getItem('authToken');
        const response = await fetch(`${API_URL}/blog/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
        });
        if (!response.ok) throw new Error('Falha ao carregar o post.');

        const post = await response.json();

        // Monta o HTML com os dados retornados
        const editarPostHTML = `
        <div class="container">
			<div class="proj">
				<p class="voltar">
					<button id="back-to-manage-post-btn" class="btn-flat waves-effect">
						<i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
					</button>
				</p>
				<form id="new-post-form" method="POST">
					<div class="top">
						<h2>Atualização de Post</h2>
						<input type="submit" value="Atualizar">
					</div>
					<div class="projInput">
						<p>Titulo do Post</p>
						<input type="text" id="titulo" name="titulo" placeholder="Ex: Post A que constitue em ..." value="${post.titulo}" required>

						<p>Descrição Curta</p>
						<input type="text" id="descricao" name="descricao" placeholder="Ex: Post A que constitue em ..." value="${post.descricao}" required>

						<p>Link da Imagem</p>
						<input type="text" id="imagem" name="imagem" placeholder="https://picsum.photos/200" value="${post.image}">

						<p>Conteúdo Completo do Post</p>
						<div id="conteudo">${post.conteudo}</div>
						
						<p>Status:</p>
                        <select id="status" name="status" required>
							<option value="Visível" ${post.status === 'Visível' ? 'selected' : ''}>Visível</option>
							<option value="Oculto" ${post.status === 'Oculto' ? 'selected' : ''}>Oculto</option>
							<option value="Revisão" ${post.status === 'Revisão' ? 'selected' : ''}>Revisão</option>
							<option value="Arquivado" ${post.status === 'Arquivado' ? 'selected' : ''}>Arquivado</option>
						</select>
						
					</div>
				</form>
			</div>
		</div>
        `;

        $mainContainer.html(editarPostHTML);

        const conteudo = new Quill('#conteudo', {
            theme: "snow"
        });

        // Inicializa o select do Materialize (se estiver usando)
	    if (M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('#status'));

        // Voltar à tela de gerenciamento
        $('#back-to-manage-post-btn').on('click', carregaPagGerenciadorPosts);

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
                const response = await fetch(`${API_URL}/blog/${id}`, {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Erro ao atualizar post: ${errorText}`);
                }

                const result = await response.json();
                M.toast({ html: 'Post atualizado com sucesso!' }); // se estiver usando Materialize
                console.log('Post atualizado:', result);
                
                carregaPagGerenciadorPosts();
            } catch(error)
            {
                console.error(error);
                M.toast({ html: 'Erro ao atualizar o post!' });
            }
        });

    } catch (error) {
        console.error("Erro ao carregar post:", error);
        $mainContainer.html(`
        <div class="container center-align" style="padding: 10vh;">
            <p class="red-text">${error.message}</p>
            <button id="back-to-manage-post-btn" class="btn-flat waves-effect">
            <i class="material-icons left">arrow_back</i>Voltar
            </button>
        </div>
        `);
        $('#back-to-manage-post-btn').on('click', carregaPagGerenciadorPosts);
    }
}