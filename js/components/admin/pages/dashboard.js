// js/admin/pages/dashboard.js
function renderDashboardPage() {
    const $mainContainer = getMainContainer();
    $mainContainer.empty();

    // ... resto do código permanece igual ...
    const user = JSON.parse(localStorage.getItem('user'));
    const userRole = user ? user.role : null;
    
    let managementButtonsHTML = '';

    if (userRole === 'Administrador') {
        managementButtonsHTML += `
        <button id="manage-users-btn" class="btn-gerenciamento">
            Gerenciar Usuários <i class="material-icons right">group</i>
        </button>
        `;
    }

    if (userRole === 'Administrador' || userRole === 'Editor') {
        managementButtonsHTML += `
        <button id="manage-posts-btn" class="btn-gerenciamento">
            Gerenciar Posts <i class="material-icons right">history_edu</i>
        </button>
        <button id="manage-projects-btn" class="btn-gerenciamento">
            Gerenciar Projetos<i class="material-icons right">recycling</i>
        </button>
        `;
    }

    const dashboardHTML = `
        <div class="container" style="padding-top: 5vh;">
        <div class="row">
            <div class="col s12">
            <button id="logout-btn" class="btn waves-effect waves-light red right">Sair</button>
            <h4 class="header">Dashboard</h4>
            <p class="p-grande">Bem-vindo(a), ${user ? user.name : 'Usuário'}!</p>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
            ${managementButtonsHTML}
            </div>
        </div>
        </div>`;
        
    $mainContainer.html(dashboardHTML);

    $('#logout-btn').on('click', handleLogout);
    
    if (userRole === 'Administrador') {
        $('#manage-users-btn').on('click', renderUserListPage);
    }

    if (userRole === 'Administrador' || userRole === 'Editor') {
        $('#manage-posts-btn').on('click', carregaPagGerenciadorposts);
        $('#manage-projects-btn').on('click', carregaPagGerenciadorProjetos);
    }
}