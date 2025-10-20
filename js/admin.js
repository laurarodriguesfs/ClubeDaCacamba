// js/admin.js

function initAdminPanel() {
  console.log("Iniciando painel administrativo com o código final e completo.");

  // --- VARIÁVEIS PRINCIPAIS ---
  const API_URL = 'http://127.0.0.1:8000/api';
  const $mainContainer = $('#main');

  // --- ROTEADOR INTERNO ---
  function adminRouter() {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    if (token && user) {
      // Se o usuário está logado (seja admin ou não), mostra o dashboard
      renderDashboardPage();
    } else {
      // Se não está logado, mostra a página de login
      renderLoginPage();
    }
  }

  // --- FUNÇÕES DE RENDERIZAÇÃO DE PÁGINA ---

  function renderLoginPage() {
    $mainContainer.empty();
    const loginHTML = `
      <div class="container" style="padding-top: 5vh;">
        <div class="row"><div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card"><div class="card-content">
                <span class="card-title">Acesso Administrativo</span>
                <form id="login-form">
                  <div class="input-field"><input id="email" type="email" class="validate" required><label for="email">Email</label></div>
                  <div class="input-field"><input id="password" type="password" class="validate" required><label for="password">Senha</label></div>
                  <button class="btn waves-effect waves-light" type="submit">Entrar<i class="material-icons right">send</i></button>
                  <p id="error-message" class="red-text"></p>
                </form>
            </div></div>
        </div></div>
      </div>`;
    $mainContainer.html(loginHTML);
    $('#login-form').on('submit', handleLogin);
  }

  function renderDashboardPage() {
  $mainContainer.empty();

  // 1. Pega os dados do usuário do localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const userRole = user ? user.role : null; // Pega a role para facilitar a verificação
  
  // 2. Inicia uma string vazia para guardar o HTML dos botões
  let managementButtonsHTML = '';

  // 3. Adiciona o botão "Gerenciar Usuários" APENAS se a role for 'admin'
  if (userRole === 'admin') {
    managementButtonsHTML += `
      <button id="manage-users-btn" class="btn-gerenciamento">
        Gerenciar Usuários <i class="material-icons right">group</i>
      </button>
    `;
  }

  // 4. Adiciona os botões de "Posts" e "Projetos" se a role for 'admin' OU 'editor'
  if (userRole === 'admin' || userRole === 'editor') {
    managementButtonsHTML += `
      <button id="manage-posts-btn" class="btn-gerenciamento">
        Gerenciar Posts <i class="material-icons right">history_edu</i>
      </button>
      <button id="manage-projects-btn" class="btn-gerenciamento">
        Gerenciar Projetos<i class="material-icons right">recycling</i>
      </button>
    `;
  }

  // 5. Monta o HTML final do dashboard
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

  // 6. Anexa os eventos de clique APENAS para os botões que foram criados

  // O botão de logout sempre existe para usuários logados
  $('#logout-btn').on('click', handleLogout);
  
  // Anexa o evento do botão de gerenciar usuários só se o usuário for admin
  if (userRole === 'admin') {
    $('#manage-users-btn').on('click', gerenciarUsuarios);
  }

  // Anexa os eventos para os outros botões se o usuário for admin ou editor
  if (userRole === 'admin' || userRole === 'editor') {
    // AINDA NÃO IMPLEMENTADO: Adicionar eventos para os outros botões de admin aqui
    // $('#manage-posts-btn').on('click', renderPostListPage); 
    // $('#manage-projects-btn').on('click', renderProjectListPage);
  }
}

  function renderUserListPage() {
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
  
  // --- FUNÇÕES DE LÓGICA ---

  async function handleLogin(event) {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    const $errorMessage = $('#error-message');
    $errorMessage.text('');
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro de autenticação.');
      }
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      adminRouter();
    } catch (error) {
      $errorMessage.text(error.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    adminRouter();
  }

  async function fetchUsers() {
    const $tableBody = $('#user-table-body');
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_URL}/users`, {
        headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Falha ao buscar usuários.');
      const users = await response.json();
      
      $tableBody.empty();
      users.forEach(user => {
        const rowHTML = `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button class="btn-small waves-effect waves-light red">Deletar</button></td>
          </tr>`;
        $tableBody.append(rowHTML);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      $tableBody.html(`<tr><td colspan="4" class="center-align red-text">${error.message}</td></tr>`);
    }
  }

  // --- PONTO DE PARTIDA ---
  adminRouter();
}