// js/admin/auth/login.js
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