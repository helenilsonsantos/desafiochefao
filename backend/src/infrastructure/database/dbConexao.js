require('dotenv').config();

const Sequelize = require('sequelize');

const DB_NOME = process.env.DB_NOME;
const DB_USUARIO = process.env.DB_USUARIO;
const DB_SENHA = process.env.DB_SENHA;
const DB_CONFIGURACOES = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  timezone: process.env.DB_TIMEZONE,
};

let dbConexao = {};

try {
  dbConexao = new Sequelize(DB_NOME, DB_USUARIO, DB_SENHA, DB_CONFIGURACOES);
} catch (error) {
  console.error('Falha ao tentar conectar com o banco de dados!');
}

async function conectarBanco() {
  try {
    await dbConexao.authenticate();
    console.log('Banco de dados conectado!');
  } catch (error) {
    console.error('Erro ao tentar conexão com o banco de dados!');
  }
}

Object.assign(dbConexao, {
  conectarBanco,
});

module.exports = dbConexao;
