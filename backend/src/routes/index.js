const express = require('express')
const usuarioController = require ('../domain/usuarios/services/UsuarioService')
const usuarioCreateValidation = require('../domain/usuarios/validations/createValidation')
const usuarioUpdateValidation = require('../domain/usuarios/validations/updateValidation')
const usuarioDesativarValidation = require('../domain/usuarios/validations/desativarValidation')
const loginValidation = require ('../domain/usuarios/validations/loginValidation')
const perfilController = require('../domain/perfil/controllers/perfilController')
const perfilCreateValidation = require('../domain/perfil/validations/cadastrar')
const perfilUpdateValidation = require('../domain/perfil/validations/atualizar')
const perfilListValidation = require('../domain/perfil/validations/listar')
const perfilDesativarValidation = require('../domain/perfil/validations/desativar')
const auth = require ('../domain/usuarios/services/authService')
const routes = express.Router()

//ROTAS DE USUÁRIOS
routes.post('/usuarios/criar', auth, usuarioCreateValidation, usuarioController.cadastrarUsuario)
routes.get('/usuarios/lista', auth, usuarioController.listadeUsuarios)
routes.patch('/usuarios/atualizar/:id', auth, usuarioUpdateValidation, usuarioController.atualizarUsuario)
routes.patch('/usuarios/desativar/:id', auth, usuarioDesativarValidation, usuarioController.desativarUsuario)

//ROTA DE LOGIN DO USUÁRIO
routes.post('/login', loginValidation, auth.login)

// ROTAS PARA CADASTRO DE PERFIS
routes.post('/perfil', auth, perfilCreateValidation, perfilController.criarPerfil);
routes.get('/perfil', auth, perfilListValidation, perfilController.listaPerfil);
routes.put('/perfil/:id', auth, perfilUpdateValidation, perfilController.atualizaPerfil);
routes.put('/perfil/desativar/:id', auth, perfilDesativarValidation, perfilController.desativaPerfil);

module.exports = routes