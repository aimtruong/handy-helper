const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
<<<<<<< HEAD
    port: 3306
=======
    port: 3001
>>>>>>> e526c80e6b30ad74e7c1e8289803bf6f110eee63
  });
}

module.exports = sequelize;