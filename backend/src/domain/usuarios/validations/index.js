const validacaoCadastrarAdm =  require('./cadastrarAdm')
const validacaoCadastrarEquipe =  require('./cadastrarEquipe')
const validacaoListarUsuarioId = require('./listarUsuarioId')
const validacaoListarUsuariosEmpresa = require('./listarUsuariosEmpresa')
const validacaoAtualizar = require('./atualizar')
const validacaoDesativar = require('./desativar')
const validacaoLogin = require('./login')


module.exports = {
    validacaoCadastrarAdm,
    validacaoCadastrarEquipe,
    validacaoListarUsuarioId,
    validacaoListarUsuariosEmpresa,
    validacaoAtualizar,
    validacaoDesativar,
    validacaoLogin
}