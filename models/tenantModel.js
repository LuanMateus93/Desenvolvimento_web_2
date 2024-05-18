const sqlite3 = require('sqlite3').verbose();
const connectDB = require('../config/db');

let db;

const initializeDatabase = (callback) => {
  db = connectDB();
  db.serialize(() => {
    console.log('Inicializando o banco de dados e criando a tabela tenants se não existir...');
    db.run(`CREATE TABLE IF NOT EXISTS tenants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Erro ao criar a tabela tenants:', err.message);
        callback(err);
      } else {
        console.log('Tabela tenants criada ou já existe.');
        callback(null);
      }
    });
  });
};

const createTenant = (name, callback) => {
  db.run(`INSERT INTO tenants (name) VALUES (?)`, [name], function (err) {
    callback(err, this ? this.lastID : null);
  });
};

const getAllTenants = (callback) => {
  db.all(`SELECT * FROM tenants`, [], (err, rows) => {
    callback(err, rows);
  });
};

const getTenantById = (id, callback) => {
  db.get(`SELECT * FROM tenants WHERE id = ?`, [id], (err, row) => {
    callback(err, row);
  });
};

const updateTenant = (id, name, callback) => {
  db.run(`UPDATE tenants SET name = ? WHERE id = ?`, [name, id], function (err) {
    callback(err, this ? this.changes : null);
  });
};

const deleteTenant = (id, callback) => {
  db.run(`DELETE FROM tenants WHERE id = ?`, [id], function (err) {
    callback(err, this ? this.changes : null);
  });
};

module.exports = {
  initializeDatabase,
  createTenant,
  getAllTenants,
  getTenantById,
  updateTenant,
  deleteTenant
};
