// js/admin.js

export function initAdminPanel() {
  
  console.log("Módulo do Painel Administrativo Iniciado! (Modo Dinâmico)");

  const API_URL = 'http://localhost:3001';
  const $mainContainer = $('#main');

  // --- FUNÇÕES DE RENDERIZAÇÃO ---
  // Elas criam o HTML e anexam os eventos necessários.

  function handleLogout() {
    console.log("Usuário deslogado.");

    // 1. Apaga o token de autenticação do localStorage
    localStorage.removeItem('authToken');
    
    // 2. Apaga as informações do usuário do localStorage
    localStorage.removeItem('user');
    
    // 3. Chama o roteador novamente. Como não há mais token,
    // ele irá automaticamente renderizar a página de login.
    adminRouter();
  }

  /**
   * Limpa o container principal, cria o HTML do login e o insere na página.
   * Depois de inserir, anexa o evento de submit ao formulário.
   */
  function renderLoginPage() {
    $mainContainer.empty(); // Limpa a área principal

    const loginHTML = `
      <div class="container">
        <div class="row" style="margin-top: 5vh;">
          <div class="col s12 m6 offset-m3">
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
                  <button class="btn waves-effect waves-light" type="submit" name="action">Entrar
                    <i class="material-icons right">send</i>
                  </button>
                  <p id="error-message" class="red-text"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    $mainContainer.html(loginHTML);

    $('#login-form').on('submit', handleLogin);
  }

  /**
   * Limpa o container, cria a estrutura do dashboard e a insere na página.
   * Depois, anexa os eventos e chama a função para buscar os dados.
   */
  function renderDashboardPage() {
    $mainContainer.empty();

    const dashboardHTML = `
      <div class="container">
        <button id="logout-btn" class="btn waves-effect waves-light red" ">
        Sair <i class="material-icons right">exit_to_app</i>
      </button>
        <h1 class="header">Gerenciamento de Usuários</h1>
        <table class="striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Função (Role)</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="user-table-body">
            <tr><td colspan="4">Carregando...</td></tr>
          </tbody>
        </table>
      </div>
    `;

    $mainContainer.html(dashboardHTML);

    // Anexa o evento de logout e busca os usuários
    $('#logout-btn').on('click', handleLogout);
    fetchUsers();
  }

  // --- FUNÇÕES DE LÓGICA E MANIPULADORES DE EVENTOS ---

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
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      adminRouter(); // Roda o roteador de novo para ir para o dashboard
    } catch (error) {
      $errorMessage.text(error.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    adminRouter(); // Roda o roteador para voltar à página de login
  }

  async function fetchUsers() {
    const $tableBody = $('#user-table-body');
    try {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) throw new Error('Falha ao buscar usuários.');
      const users = await response.json();
      
      $tableBody.empty();
      users.forEach(user => {
        const row = `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button class="btn-small waves-effect waves-light red">Deletar</button></td>
          </tr>
        `;
        $tableBody.append(row);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
      $tableBody.html(`<tr><td colspan="4">${error.message}</td></tr>`);
    }
  }

  // --- ROTEADOR INTERNO DO PAINEL ---
  function adminRouter() {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user && user.role === 'admin') {
      renderDashboardPage(); // Chama a função que renderiza o dashboard
    } else {
      renderLoginPage(); // Chama a função que renderiza o login
    }
  }
  
  // Ponto de partida para a lógica do painel
  adminRouter();
}