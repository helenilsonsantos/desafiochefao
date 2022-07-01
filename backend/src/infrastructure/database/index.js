require('dotenv').config();

const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CONFIG = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, DB_CONFIG);
} catch (error) {
  console.error('Falha ao tentar conectar com o banco de dados!');
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log('Banco de dados conectado!');
  } catch (error) {
    console.error('Erro ao tentar conexão com o banco de dados!');
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
