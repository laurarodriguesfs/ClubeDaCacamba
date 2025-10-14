// js/admin.js

function initAdminPanel() {
  console.log("Iniciando painel administrativo com o código final e completo.");

  // --- VARIÁVEIS PRINCIPAIS ---
  const API_URL = 'http://127.0.0.1:8000/api';
  const $mainContainer = $('#main');

  // --- ROTEADOR INTERNO ---
  // Decide qual página mostrar com base no status de login
  function adminRouter() {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    if (token && user && user.role === 'admin') {
      renderDashboardPage();
    } else {
      renderLoginPage();
    }
  }

  // --- FUNÇÕES DE RENDERIZAÇÃO DE PÁGINA ---

  // Desenha a página de LOGIN
  function renderLoginPage() {
    $mainContainer.empty();
    const loginHTML = `
      <div class="container" style="padding-top: 5vh;">
        <div class="row">
          <div class="col s12 m8 offset-m2 l6 offset-l3">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Acesso Administrativo</span>
                <form id="login-form">
                  <div class="input-field">
                    <input id="email" type="email" class="validate" required>
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field">
                    <input id="password" type="password" class="validate" required>
                    <label for="password">Senha</label>
                  </div>
                  <button class="btn waves-effect waves-light" type="submit">Entrar<i class="material-icons right">send</i></button>
                  <p id="error-message" class="red-text"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $mainContainer.html(loginHTML);
    $('#login-form').on('submit', handleLogin);
  }

  // Desenha a página de DASHBOARD
  async function renderDashboardPage() {
    $mainContainer.empty();
    const dashboardHTML = `
      <div class="container" style="padding-top: 5vh;">
        <div class="row">
          <div class="col s12">
            <button id="logout-btn" class="btn waves-effect waves-light red right">Sair</button>
            <h4 class="header">Dashboard</h4>
            <p>Bem-vindo(a) ao painel administrativo!</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <div class="card-panel teal">
              <span class="white-text">
                <h5>Total de Usuários</h5>
                <h3 id="stats-users-count">...</h3>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button id="manage-users-btn" class="btn waves-effect waves-light">
              Gerenciar Usuários <i class="material-icons right">people</i>
            </button>
          </div>
        </div>
      </div>`;
    $mainContainer.html(dashboardHTML);

    $('#logout-btn').on('click', handleLogout);
    $('#manage-users-btn').on('click', renderUserListPage);

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_URL}/stats/total-users`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Falha ao buscar estatísticas.');
      const data = await response.json();
      $('#stats-users-count').text(data.count);
    } catch (error) {
      console.error(error.message);
      $('#stats-users-count').text('Erro!');
    }
  }

  // Desenha a página de LISTA DE USUÁRIOS
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
          <tbody id="user-table-body">
            <tr><td colspan="4" class="center-align">Carregando...</td></tr>
          </tbody>
        </table>
      </div>`;
    $mainContainer.html(listHTML);
    $('#back-to-dashboard-btn').on('click', renderDashboardPage);
    fetchUsers();
  }
  
  // --- FUNÇÕES DE LÓGICA (manipuladores de eventos e chamadas de API) ---

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