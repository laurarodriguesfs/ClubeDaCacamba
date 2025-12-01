// js/admin/pages/users.js
function renderUserListPage() {
    const $mainContainer = getMainContainer();
    $mainContainer.empty();
    const listHTML = `
        <div class="flex-container gerenciar-usuarios" style="padding-top: 5vh;">
            <div class="proj">
                <div class="div-botoes">
                    <button id="back-to-dashboard-btn" class="valign-wrapper btn-flat waves-effect">
                        <i class="material-icons left">arrow_back</i>Voltar ao Dashboard
                    </button>
                    <button id="back-to-new-user-btn" class="valign-wrapper waves-effect">
                        <i class="material-icons">add</i>
                        Adicionar um novo usuário
                    </button>
                </div>
                <h4 class="header">Gerenciamento de Usuários</h4>
                <table class="project-table striped">
                    <thead>
                    <tr><th>Nome</th><th>Email</th><th>Função (Role)</th><th>Ações</th></tr>
                    </thead>
                    <tbody id="user-table-body"><tr><td colspan="4">Carregando...</td></tr></tbody>
                </table>
            </div>
        </div>`;
    $mainContainer.html(listHTML);
    $('#back-to-dashboard-btn').on('click', renderDashboardPage);
    $('#back-to-new-user-btn').on('click', novoUsuario);
    fetchUsers();
}