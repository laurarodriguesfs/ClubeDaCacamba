function gerenciarUsuarios()
{
	const main = document.querySelector("#main");
	main.innerHTML = `
    <div class="gerenciar-usuarios container">
        <div class="div-botoes">
          <a class="valign-wrapper" href="#sobre">
            <i class="material-icons">arrow_back</i>
            Voltar ao Gerenciador
          </a>
          <a class="btn-adicionar-usuario valign-wrapper" href="#novoUsuario">
            <i class="material-icons">add</i>
            Adicionar um novo usuário
          </a>
        </div>
        <h3>Gerenciamento de Usuários</h3>
        <table class="striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Função (Role)</th>
              <th class="center-align">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Teste</td>
              <td>teste@gmail.com</td>
              <td>Administrador</td>
              <td class="right-align">
                <a href="">Editar dados</a>
                <a href="">Mudar permissões</a>
                <a href="">Deletar</a>
              </td>
            </tr>
            <tr>
              <td>Teste2</td>
              <td>teste2@gmail.com</td>
              <td>Administrador</td>
              <td class="right-align">
                <a href="">Editar dados</a>
                <a href="">Mudar permissões</a>
                <a href="">Deletar</a>
              </td>
            </tr>
            <tr>
              <td>Teste3</td>
              <td>teste3@gmail.com</td>
              <td>Editor</td>
              <td class="right-align">
                <a href="">Editar dados</a>
                <a href="">Mudar permissões</a>
                <a href="">Deletar</a>
              </td>
            </tr>
          </tbody>
        </table>

    </div>
    `;
}