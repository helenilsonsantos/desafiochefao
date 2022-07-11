const express = require('express');

const PacienteController = require('../domain/pacientes/controllers/pacienteController');
const UsuarioController = require ('../domain/usuarios/controllers/usuarioController');
const AtendimentoController = require('../domain/atendimentos/controllers/atendimentoController');
const AuthController = require ('../domain/usuarios/controllers/authController');
const auth = require ('../middlewares/auth');

const pacienteValidation = require('../domain/pacientes/validations');
const usuarioValidation = require('../domain/usuarios/validations');
const atendimentoValidation = require('../domain/atendimentos/validations');

const rotas = express.Router();

//ROTAS DE PACIENTES
rotas.post("/paciente", auth, pacienteValidation.validacaoCadastrar, PacienteController.cadastrarPaciente);
rotas.get("/paciente/:idPaciente", auth, pacienteValidation.validacaoListarPacienteId, PacienteController.mostrarPacientePorId);
rotas.get("/pacientes/empresa/:idEmpresa", auth, pacienteValidation.validacaoListarPacientesEmpresa, PacienteController.mostrarPacientesDeEmpresa);
rotas.patch("/paciente/:idPaciente", auth, pacienteValidation.validacaoAtualizar, PacienteController.atualizarPaciente);
rotas.patch("/paciente/desativar/:idPaciente", auth, pacienteValidation.validacaoDesativar, PacienteController.desativarPaciente);

//ROTAS DE USUÁRIOS
rotas.post("/cadastro-inicial", usuarioValidation.validacaoCadastrarAdm, UsuarioController.cadastrarUsuarioAdministrador);
rotas.post("/usuario", auth, usuarioValidation.validacaoCadastrarEquipe, UsuarioController.cadastrarUsuarioEquipe); 
rotas.get("/usuario/:idUsuario", auth, usuarioValidation.validacaoListarUsuarioId, UsuarioController.mostrarUsuarioPorId);
rotas.get("/usuarios/empresa/:idEmpresa", auth, usuarioValidation.validacaoListarUsuariosEmpresa, UsuarioController.mostrarUsuariosDeEmpresa);
rotas.patch("/usuario/:idUsuario", auth, usuarioValidation.validacaoAtualizar, UsuarioController.atualizarUsuario);
rotas.patch("/usuario/desativar/:idUsuario", auth, usuarioValidation.validacaoDesativar, UsuarioController.desativarUsuario);

//ROTA DE LOGIN
rotas.post('/login', usuarioValidation.validacaoLogin, AuthController.login);

//ROTAS DE ATENDIMENTOS
rotas.post("/atendimento", auth, atendimentoValidation.validacaoCadastrar, AtendimentoController.cadastrarAtendimento);
rotas.get("/atendimento/:idAtendimento", auth, atendimentoValidation.validacaoListarAtendimentoId, AtendimentoController.mostrarAtendimentoPorId);
rotas.get("/atendimentos/paciente/:idPaciente", auth, atendimentoValidation.validacaoListarAtendimentosdePaciente, AtendimentoController.mostrarAtendimentosDePaciente);
rotas.patch("/atendimento/:idAtendimento", auth, atendimentoValidation.validacaoAtualizar, AtendimentoController.atualizarAtendimento);
rotas.patch("/atendimento/desativar/:idAtendimento", auth, atendimentoValidation.validacaoAtualizar, AtendimentoController.desativarAtendimento);


module.exports = rotas;
