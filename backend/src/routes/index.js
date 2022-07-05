const express = require('express');
const AtendimentoController = require('../domain/atendimentos/controllers/atendimentoController');
const AtendimentoValidation = require('../domain/atendimentos/validations');

const routes = express.Router();

routes.post("/atendimento", AtendimentoValidation.validacaoCadastrar, AtendimentoController.cadastrar);
routes.get("/atendimento/:id", AtendimentoValidation.validacaoListar, AtendimentoController.mostrar);
routes.patch("/atendimento/:id", AtendimentoValidation.validacaoAtualizar, AtendimentoController.atualizar);
routes.patch("/atendimento/desativar/id", AtendimentoValidation.validacaoDesativar, AtendimentoController.desativar);

module.exports = routes;