<<<<<<< HEAD
const dotenv = require ('dotenv').config()

module.exports = {
 "development": {
   "username": process.env.DB_USUARIO,
   "password": process.env.DB_SENHA,
   "database": process.env.DB_NOME,
   "host": process.env.DB_HOT,
   "dialect": "mysql"
 },
 "production": {
   "username": process.env.DB_USUARIO_PRODUCAO,
   "password": process.env.DB_SENHA_PRODUCAO,
   "database": process.env.DB_NOME_PRODUCAO,
   "host": process.env.DB_HOST_PRODUCAO,
   "dialect": "mysql"
 }
}
=======
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
>>>>>>> 2beb728179e08f29e2ba817c85dda3e72468c7bc
