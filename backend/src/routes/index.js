const express = require('express');
const empresasController = require('../domain/empresas/controller/empresasController');
const empresaValidate = require('../domain/empresas/validations/index');

const rotas = express.Router();

rotas.post('/empresa', empresaValidate.validarCadastrar, empresasController.cadastrar);
rotas.get('/empresa/:id', empresaValidate.validarListar, empresasController.listar);
rotas.patch('/empresa/:id', empresaValidate.validarAtualizar, empresasController.atualizar);
rotas.patch('/empresa/desativar/:id', empresaValidate.validarDesativar, empresasController.desativar);

module.exports = rotas;
