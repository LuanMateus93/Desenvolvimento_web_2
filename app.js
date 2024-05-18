const express = require('express');
const tenantRoutes = require('./routes/tenantRoutes');
const tenantService = require('./services/tenantService');

const app = express();
app.use(express.json());
app.use('/api', tenantRoutes);

// Inicializar o banco de dados
tenantService.initializeDatabase((err) => {
  if (err) {
    console.error('Erro ao inicializar o banco de dados:', err.message);
    process.exit(1); // Encerrar o processo se houver um erro na inicialização do banco de dados
  } else {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor está rodando na porta ${PORT}`);
    });
  }
});
