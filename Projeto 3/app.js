const express = require('express');
const app = express();

// Rota para requisições GET
app.get('/get', (req, res) => {
    // Processamento para a requisição GET
    res.status(200).send('Requisição GET recebida');
});

// Rota para requisições POST
app.post('/post', (req, res) => {
    // Processamento para a requisição POST
    res.status(200).send('Requisição POST recebida');
});

// Rota para códigos de status 401/403
app.get('/unauthorized', (req, res) => {
    res.status(401).send('Acesso não autorizado');
});

// Rota para códigos de status 404
app.get('/notfound', (req, res) => {
    res.status(404).send('Recurso não encontrado');
});

// Rota para códigos de status 500
app.get('/error', (req, res) => {
    res.status(500).send('Erro interno do servidor');
});

// Rota padrão para outros casos
app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
