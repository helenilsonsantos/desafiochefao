const express = require ('express')
const cors = require ('cors')
const port = process.env.PORT || 4350
const rotas= require ('../routes')
const handleError = require('../middlewares/handleError')
const db = require('../infrastructure/database/dbConexao')
const upload = require('../configs/uploads')

const app = express();
app.use(cors());

db.conectarBanco();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.any());
app.use(rotas);
app.use(handleError);

app.listen(port, () => console.log (`Servidor rodadando na porta ${port}`))
