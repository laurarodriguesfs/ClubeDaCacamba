// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Habilita o middleware padrão (logger, static, cors e no-cache)
server.use(middlewares);
// Habilita o leitor de corpo de requisição para poder ler POST, PUT, etc.
server.use(jsonServer.bodyParser);

// Middleware para a rota de Login customizada
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Acessa o "banco de dados" do json-server
  const db = router.db; 
  const user = db.get('users').find({ email: email, password: password }).value();

  if (user) {
    // Se o usuário for encontrado, retorna sucesso e um "token" falso
    console.log(`Login bem-sucedido para: ${user.email}`);
    const token = `fake_token_for_${user.email}_${Date.now()}`;
    res.status(200).json({ 
      message: "Login bem-sucedido!",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } else {
    // Se o usuário não for encontrado, retorna erro 401 (Não Autorizado)
    console.log(`Tentativa de login falhou para o email: ${email}`);
    res.status(401).json({ message: "Email ou senha incorretos." });
  }
});

// Usa o roteador padrão do json-server para as outras rotas (como /users)
server.use(router);

// Inicia o servidor na porta 3001
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ JSON Server com rota de login está rodando na porta ${PORT}`);
});