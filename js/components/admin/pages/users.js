// js/admin/pages/users.js
function renderUserListPage() {
    const $mainContainer = getMainContainer();
    $mainContainer.empty();
    const listHTML = `
        <div class="container" style="padding-top: 5vh;">
        <button id="back-to-dashboard-btn" class="btn-flat waves-effect">
            <i class="material-icons left">arrow_back</i>Voltar ao Dashboard
        </button>
        <h4 class="header">Gerenciamento de Usuários</h4>
        <table class="striped">
            <thead>
            <tr><th>Nome</th><th>Email</th><th>Função (Role)</th><th>Ações</th></tr>
            </thead>
            <tbody id="user-table-body"><tr><td colspan="4">Carregando...</td></tr></tbody>
        </table>
        </div>`;
    $mainContainer.html(listHTML);
    $('#back-to-dashboard-btn').on('click', renderDashboardPage);
    fetchUsers();
}