<?php
// Mostrar erros para debug (remova em produção)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/plain; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Método não permitido";
    exit;
}

// Verifica campos obrigatórios
if (empty($_POST['nome']) || empty($_POST['email']) || empty($_POST['mensagem'])) {
    echo "Por favor, preencha todos os campos obrigatórios.";
    exit;
}

// Captura os dados
$nome = trim($_POST['nome']);
$telefone = trim($_POST['telefone'] ?? '');
$email = trim($_POST['email']);
$assunto = trim($_POST['assunto'] ?? 'Contato pelo site');
$mensagem = trim($_POST['mensagem']);

// Aqui você pode enviar email, salvar em banco ou arquivo, etc.
// Para teste simples, vamos só salvar numa linha de arquivo txt:

$dados = "Nome: $nome\nTelefone: $telefone\nEmail: $email\nAssunto: $assunto\nMensagem: $mensagem\n---------------------\n";

file_put_contents('contato.txt', $dados, FILE_APPEND);

// Retorna "ok" para seu fetch reconhecer o sucesso
echo "ok";
