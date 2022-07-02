const express = require('express')
const usuarioController = require ('../domain/usuarios/services/UsuarioService')
const usuarioCreateValidation = require('../domain/usuarios/validations/createValidation')
const usuarioUpdateValidation = require('../domain/usuarios/validations/updateValidation')
const usuarioDesativarValidation = require('../domain/usuarios/validations/desativarValidation')
const auth = require ('../domain/usuarios/services/authService')
const loginValidation = require ('../domain/usuarios/validations/loginValidation')

const rotas = express.Router()

//ROTAS DE USUÁRIOS
rotas.post('/usuarios/criar', auth, usuarioCreateValidation, usuarioController.cadastrarUsuario)
rotas.get('/usuarios/lista', auth, usuarioController.listadeUsuarios)
rotas.patch('/usuarios/atualizar/:id', auth, usuarioUpdateValidation, usuarioController.atualizarUsuario)
rotas.patch('/usuarios/desativar/:id', auth, usuarioDesativarValidation, usuarioController.desativarUsuario)

//ROTA DE LOGIN DO USUÁRIO
rotas.post('/login', loginValidation, auth.login)

module.exports = rotas