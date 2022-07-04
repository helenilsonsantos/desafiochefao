const express = require('express');
const PacienteController = require('../domain/pacientes/controllers/pacienteController');
const PacienteValidation = require('../domain/pacientes/validations');

const routes = express.Router();

routes.post("/paciente", PacienteValidation.validacaoCadastrar, PacienteController.cadastrar);
routes.get("/paciente/:id", PacienteValidation.validacaoListar, PacienteController.mostrar);
routes.patch("/paciente/:id", PacienteValidation.validacaoAtualizar, PacienteController.atualizar);
routes.patch("/paciente/desativar/:id", PacienteValidation.validacaoDesativar, PacienteController.desativar);

module.exports = routes;