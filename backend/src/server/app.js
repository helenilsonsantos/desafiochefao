const express = require('express');
const cors = require('cors');
const porta = process.env.PORTA;
const rotas = require('../routes');
const trataErros = require('../middleware/trataErros');
const db = require('../infrastructure/database/dbConexao');
const upload = require('../configs/uploads');

const app = express();
app.use(cors());

db.conectarBanco();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.any());
app.use(rotas);
app.use(trataErros);

app.listen(porta || 4350, () => console.log ('Servidor rodadando na porta 4350'));