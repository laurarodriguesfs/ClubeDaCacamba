// js/components/loginPage.js

// A função recebe o que precisa para trabalhar, em vez de usar variáveis globais.
export default function renderLoginPage($container, onLoginSubmitCallback) {
  $container.empty();
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
  $container.html(loginHTML);
  
  // Anexa o callback recebido ao evento de submit do formulário
  $('#login-form').on('submit', onLoginSubmitCallback);
}