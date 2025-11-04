// js/components/admin/pages/novoUsuario.js

function novoUsuario()
{
    const main = document.querySelector("#main");
    main.innerHTML = `
        <div class="novo-usuario container">
            <button id="back-to-users-btn" class="valign-wrapper btn-flat waves-effect">
                <i class="material-icons left">arrow_back</i>Voltar ao Gerenciador
            </button>
            <h3>Criação de novo usuário</h3>

            <form class="row" action="">

                <fieldset class="col s12 m6">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="João">
                    
                    
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@gmail.com">

                    <label for="funcao">Função</label>
                    <input type="text" name="funcao" id="funcao" placeholder="Editor">
                </fieldset>

                <div class="col mt-3 s12 m5 center-align">
                    <button class="">Criar</button>
                </div>
                

            </form>
        </div>
    `
    $('#back-to-users-btn').on('click', renderUserListPage)
}