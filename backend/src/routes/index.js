const express = require('express');
const empresasController = require('../domain/empresas/controller/empresasController');
const empresaValidate = require('../domain/empresas/validations/index');

const routes = express.Router();

routes.post(
  '/empresa',
  empresaValidate.validarCadastrar,
  empresasController.cadastrar
);
routes.get(
  '/empresa/:id',
  empresaValidate.validarListar,
  empresasController.listar
);
routes.put(
  '/empresa/:id',
  empresaValidate.validarAtualizar,
  empresasController.atualizar
);
routes.put(
  '/empresa/desativar/:id',
  empresaValidate.validarDesativar,
  empresasController.desativar
);

module.exports = routes;
