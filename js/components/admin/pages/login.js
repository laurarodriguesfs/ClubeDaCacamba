// js/admin/pages/login.js
function renderLoginPage() {
    const $mainContainer = getMainContainer();
    $mainContainer.empty();
    const loginHTML = `
        <div class="container" style="padding-top: 5vh;">
        <div class="row"><div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card"><div class="card-content">
                    <span class="card-title">Acesso Administrativo</span>
                    <form id="login-form">
                    <div class="input-field"><input id="email" type="email" class="validate" required><label for="email">Email</label></div>

                    <div class="input-field password-wrapper" style="position: relative;">
                        <input id="password" type="password" class="validate" required>
                        <label for="password">Senha</label>
                        <span class="suffix-icon" style="position: absolute; right: 10px; top: 65%; transform: translateY(-50%); cursor: pointer;">
                            <i class="material-icons visibility-icon">visibility_off</i>
                        </span>
                    </div>

                    <button class="btn waves-effect waves-light" type="submit">Entrar<i class="material-icons right">send</i></button>
                    <p id="error-message" class="red-text"></p>
                    </form>
                </div></div>
            </div></div>
        </div>`;
    $mainContainer.html(loginHTML);

    $('.visibility-icon').click(function(){
        const passwordInput = $('#password');
        const icon = $(this);
        
        if (passwordInput.attr('type') === 'password') 
        {
            passwordInput.attr('type', 'text');
            icon.text('visibility');
        } else 
            {
            passwordInput.attr('type', 'password');
            icon.text('visibility_off');
        }
        
        // Mantém o foco no input
        passwordInput.focus();
    });

    $('#login-form').on('submit', handleLogin);
}