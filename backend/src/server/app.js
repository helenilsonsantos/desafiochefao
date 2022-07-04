const express = require('express');
const porta = process.env.PORTA || 4350;
const rotas = require('../routes');
const db = require('../infrastructure/database/dbConexao');
const handleError = require('../middlewares/handleError');
const upload = require('../configs/uploads');

const app = express();

db.conectarBanco();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());
app.use(rotas);
app.use(handleError);

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
