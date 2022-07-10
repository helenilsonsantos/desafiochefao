const sequelize = require ('sequelize')
const dotenv = require('dotenv').config()

const DB_NOME = process.env.DB_NOME
const DB_USUARIO = process.env.DB_USUARIO
const DB_SENHA = process.env.DB_SENHA
const DB_CONFIGURACOES = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    timezone: process.env.DB_TIMEZONE
}

let dbConexao = {}

try {
    dbConexao = new sequelize (
        DB_NOME,
        DB_USUARIO,
        DB_SENHA,
        DB_CONFIGURACOES
    )
} catch (error) {

}

async function conectarBanco () {
    try {
        await dbConexao.authenticate ()
        console.log ('Banco de dados conectado!')
    } catch (error) {
        console.error ('Problemas ao conectar ao banco de bados.')
        console.log(error)
    }
}

Object.assign(dbConexao, {
    conectarBanco
    
})

module.exports = dbConexao
