export default function contato() {
  const main = document.querySelector("#main");

  main.innerHTML = `
    <div class="page-contato container">
      <div class="container-contato">
        <h2>Entre em contato com a gente...</h2>
        <div class="conteudo-contato">
          <div class="info-contato">
            <h3>Nossas<br>informações:</h3>
            <p>
              Avenida dos Pioneiros, 3131 –<br>
              Jardim Morumbi, Londrina – PR,<br>
              86036-370<br>
              Bloco L, Sala 013
            </p>
          </div>
          <div class="form-contato">
            <h3>Ou nos deixe uma mensagem:</h3>
            <form id="form-contato">
              <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
              </div>
              <div class="form-group">
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="assunto">Assunto:</label>
                <input type="text" id="assunto" name="assunto">
              </div>
              <div class="form-group">
                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="8" required></textarea>
              </div>
              <button class="align-center" id="btn-enviar" type="submit">Enviar</button>
            </form>
            <div id="mensagem-enviada" style="display: none; color: green; margin-top: 10px;">
              Sua mensagem foi enviada com sucesso!
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Código para enviar os dados via fetch e exibir a mensagem de sucesso
  const form = document.getElementById("form-contato");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("processa.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        if (data === "ok") {
          document.getElementById("mensagem-enviada").style.display = "block";
          form.reset();
        } else {
          alert("Erro ao enviar: " + data);
        }
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  });
}
