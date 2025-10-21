// js/admin/main.js
function initAdminPanel() {
  console.log("Iniciando painel administrativo com o código final e completo.");

  // --- VARIÁVEIS PRINCIPAIS ---
  const API_URL = 'http://127.0.0.1:8000/api';
  const $mainContainer = $('#main');

  // --- PONTO DE PARTIDA ---
  adminRouter();
}