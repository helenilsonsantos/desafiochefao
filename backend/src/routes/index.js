const express = require('express');

const PerfilController = require('../domain/perfil/controllers/perfilController');
const pagamentoController = require('../domain/formaPagamento/controllers/pagamentoController');
const perfilValidate = require('../domain/perfil/validations/index');

const routes = express.Router();

routes.post('/perfil', perfilValidate.validaCadastrar, PerfilController.criarPerfil);
routes.get('/perfil', perfilValidate.validaListar, PerfilController.listaPerfil);
routes.put('/perfil/:id', perfilValidate.validaAtualizar, PerfilController.atualizaPerfil);
routes.put('/perfil/desativar/:id', perfilValidate.validaDesativar, PerfilController.desativaPerfil);



module.exports = routes;
