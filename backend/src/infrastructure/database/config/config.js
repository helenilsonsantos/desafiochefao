const dotenv = require ('dotenv').config()

module.exports = {
 "development": {
   "username": process.env.DB_USUARIO,
   "password": process.env.DB_SENHA,
   "database": process.env.DB_NOME,
   "host": process.env.DB_HOST,
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