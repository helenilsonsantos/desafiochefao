const express = require ('express')
const cors = require ('cors')
const porta = process.env.PORTA || 4350
const routes= require ('../routes')
const handleError = require('../middlewares/handleError')
const db = require('../infrastructure/database/dbConexao')
const upload = require('../configs/uploads')

const app = express()
app.use (cors())

db.conectarBanco()

app.use (express.json())
app.use(express.urlencoded({extended: true}))
app.use(upload.any())
app.use (routes)
app.use(handleError)

app.listen(porta, () => console.log ('Servidor rodadando na porta 4350'))