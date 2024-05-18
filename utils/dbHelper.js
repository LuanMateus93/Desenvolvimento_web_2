const createConnection = require('../config/db');

const executeQuery = async (database, query) => {
  const connection = await createConnection(database);
  const [results] = await connection.execute(query);
  connection.end();
  return results;
};

module.exports = { executeQuery };
