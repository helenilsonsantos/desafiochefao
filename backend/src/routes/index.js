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

const rotas = express.Router();

//ROTAS DE PACIENTES
rotas.post("/paciente", PacienteValidation.validacaoCadastrar, PacienteController.cadastrar);
rotas.get("/paciente/:id", PacienteValidation.validacaoListar, PacienteController.mostrar);
rotas.patch("/paciente/:id", PacienteValidation.validacaoAtualizar, PacienteController.atualizar);
rotas.patch("/paciente/desativar/:id", PacienteValidation.validacaoDesativar, PacienteController.desativar);

//ROTAS DE USUÁRIOS
rotas.post('/usuario/criar', auth.login, usuarioCreateValidation, usuarioController.cadastrarUsuario)
rotas.get('/usuario/lista', auth.login, usuarioController.listadeUsuarios)
rotas.patch('/usuario/:idUsuario', auth.login, usuarioUpdateValidation, usuarioController.atualizarUsuario)
rotas.patch('/usuario/desativar/:idUsuario', auth.login, usuarioDesativarValidation, usuarioController.desativarUsuario)

//ROTA DE LOGIN DO USUÁRIO
rotas.post('/login', loginValidation, auth.login)

//ROTAS DE EMPRESAS
rotas.post('/empresa', empresaValidate.validarCadastrar, empresasController.cadastrar);
rotas.get('/empresa/:id', empresaValidate.validarListar, empresasController.listar);
rotas.patch('/empresa/:id', empresaValidate.validarAtualizar, empresasController.atualizar);
rotas.patch('/empresa/desativar/:id', empresaValidate.validarDesativar, empresasController.desativar);

module.exports = rotas
