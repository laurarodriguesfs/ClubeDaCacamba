// js/admin/auth/logout.js
function handleLogout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  adminRouter();
}