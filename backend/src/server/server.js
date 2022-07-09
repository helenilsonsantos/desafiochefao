const app  = require ('../app')
const db = require('../infrastructure/database/dbConexao')
const port = process.env.PORT || 4350

db.conectarBanco();

app.listen(port, () => console.log (`Servidor rodadando na porta ${port}`))


