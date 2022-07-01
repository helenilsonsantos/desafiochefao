const express = require('express');
const routes = require('./routes');
const db = require('./infrastructure/database/index');
const handleError = require('./middlewares/handleError');

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);
app.use(handleError);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
