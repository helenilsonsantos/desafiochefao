const express = require ('express')
const cors = require ('cors')
const rotas= require ('../routes')
const handleError = require('../middlewares/handleError')
const upload = require('../configs/uploads')

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.any());
app.use(rotas);
app.use(handleError);

module.exports = app