const sqlite3 = require('sqlite3').verbose();

const connectDB = () => {
  return new sqlite3.Database(':memory:', (err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite em memória.');
    }
  });
};

module.exports = connectDB;
