const express = require('express');
const PacienteController = require('../domain/pacientes/controllers/pacienteController');
const PacienteValidation = require('../domain/pacientes/validations');
const empresasController = require('../domain/empresas/controller/empresasController');
const empresaValidate = require('../domain/empresas/validations/index');
const usuarioController = require ('../domain/usuarios/controllers/usuarioController')
const usuarioCreateValidation = require('../domain/usuarios/validations/createValidation')
const usuarioUpdateValidation = require('../domain/usuarios/validations/updateValidation')
const usuarioDesativarValidation = require('../domain/usuarios/validations/desativarValidation')
const loginValidation = require ('../domain/usuarios/validations/loginValidation')
const auth = require ('../domain/usuarios/services/authService')
const AtendimentoController = require('../domain/atendimentos/controllers/atendimentoController');
const AtendimentoValidation = require('../domain/atendimentos/validations');

const rotas = express.Router();

//ROTAS DE PACIENTES
rotas.post("/paciente", auth.login, PacienteValidation.validacaoCadastrar, PacienteController.cadastrar);
rotas.get("/paciente/:id", auth.login, PacienteValidation.validacaoListar, PacienteController.mostrar);
rotas.patch("/paciente/:id", auth.login, PacienteValidation.validacaoAtualizar, PacienteController.atualizar);
rotas.patch("/paciente/desativar/:id", auth.login, PacienteValidation.validacaoDesativar, PacienteController.desativar);

//ROTAS DE USUÁRIOS
rotas.post('/usuario', auth.login, usuarioCreateValidation, usuarioController.cadastrarUsuario)
rotas.get('/usuario', auth.login, usuarioController.listadeUsuarios)
rotas.patch('/usuario/:id', auth.login, usuarioUpdateValidation, usuarioController.atualizarUsuario)
rotas.patch('/usuario/desativar/:id', auth.login, usuarioDesativarValidation, usuarioController.desativarUsuario)

//ROTA DE LOGIN DO USUÁRIO
rotas.post('/login', loginValidation, auth.login)

//ROTAS DE EMPRESAS
rotas.post('/empresa', auth.login, empresaValidate.validarCadastrar, empresasController.cadastrar);
rotas.get('/empresa/:id', auth.login, empresaValidate.validarListar, empresasController.listar);
rotas.patch('/empresa/:id', auth.login, empresaValidate.validarAtualizar, empresasController.atualizar);
rotas.patch('/empresa/desativar/:id', auth.login, empresaValidate.validarDesativar, empresasController.desativar);

//ROTAS DE ATENDIMENTOS
rotas.post("/atendimento", auth.login, AtendimentoValidation.validacaoCadastrar, AtendimentoController.criarAtendimento);
rotas.get("/atendimento/:id", auth.login, AtendimentoValidation.validacaoListar, AtendimentoController.listarAtendimento);
rotas.patch("/atendimento/:id", auth.login, AtendimentoValidation.validacaoAtualizar, AtendimentoController.atualizarAtendimento);
rotas.patch("/atendimento/desativar/id", auth.login, AtendimentoValidation.validacaoDesativar, AtendimentoController.desativarAtendimento);

module.exports = rotas;
