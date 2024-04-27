const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Armazenar o contador de visitas
let visitCount = 0;

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter o contador de visitas via SSE
app.get('/visit-count', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Enviar o contador de visitas a cada segundo
    const intervalId = setInterval(() => {
        res.write(`data: ${JSON.stringify({ count: visitCount })}\n\n`);
    }, 1000);

    // Encerrar a conexão quando o cliente se desconectar
    req.on('close', () => {
        clearInterval(intervalId);
    });
});

// Incrementar o contador de visitas a cada requisição
app.use((req, res, next) => {
    visitCount++;
    next();
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
