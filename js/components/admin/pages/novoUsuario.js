// js/components/admin/pages/novoUsuario.js

function novoUsuario()
{
    const main = document.querySelector("#main");
    main.innerHTML = `
        <div class="container input-field">
            <button id="back-to-manage-users-btn" class="valign-wrapper btn-flat waves-effect">
                <i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
            </button>
            <form id="new-user-form" method="POST">
                <div class="top">
					<h2>Criação de novo usuário</h2>
					<input type="submit" value="Criar">
				</div>
                <div>
                    <label for="nome">Nome do Usuário</label>
                    <input type="text" name="nome" id="nome" placeholder="João" required>
                    
                    
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@gmail.com" required>

                
                    <!-- Container relativo para o campo de senha -->
                    <div class="password-wrapper" style="position: relative;">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" id="senha" class="validate" required>
                        <span class="suffix-icon" style="position: absolute; right: 10px; top: 65%; transform: translateY(-50%); cursor: pointer;">
                            <i class="material-icons visibility-icon">visibility_off</i>
                        </span>
                    </div>
                    

                    <label for="role">Função (role)</label>
                    <select id="role" name="role" required>
						<option value="Administrador">Administrador</option>
						<option value="Editor">Editor</option>
					</select>
                </div>
            </form>
        </div>
    `
    // Botão voltar
	$('#back-to-manage-users-btn').on('click', renderUserListPage);

    // Inicializa o select do Materialize (se estiver usando)
	if (M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('select'));

    document.querySelector('#new-user-form').addEventListener('submit', async (e) => 
    {
        e.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const senha = document.querySelector('#senha').value.trim();
        const role = document.querySelector('#role').value;

        const userData = 
        { 
            name: nome, 
            email, 
            password: senha,
            role 
        };

        try 
        {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erro ao criar usuário: ${errorText}`);
            }

            const result = await response.json();
            M.toast({ html: 'Usuário criado com sucesso!' });
            console.log('Usuário criado:', result);

            renderUserListPage()
        } catch (error) {
            console.error(error);
            M.toast({ html: 'Erro ao criar o usuário!' });
        }
    });

    
    $('.visibility-icon').click(function(){
        const passwordInput = $('#senha');
        const icon = $(this);
        
        if (passwordInput.attr('type') === 'password') 
        {
            passwordInput.attr('type', 'text');
            icon.text('visibility');
        } else 
            {
            passwordInput.attr('type', 'password');
            icon.text('visibility_off');
        }
        
        // Mantém o foco no input
        passwordInput.focus();
    });

}
