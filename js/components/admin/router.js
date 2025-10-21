// js/admin/router.js
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