require('dotenv').config();

const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;
const DB_CONFIG = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexão com banco de dados.");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar uma conexão com banco de dados.");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;