const validacaoCadastrar =  require('./cadastrar')
const validacaoListarPacienteId = require('./listarPacienteId')
const validacaoListarPacientesEmpresa = require('./listarPacientesEmpresa')
const validacaoAtualizar = require('./atualizar')
const validacaoDesativar = require('./desativar')

module.exports = {
    validacaoCadastrar,
    validacaoListarPacienteId,
    validacaoListarPacientesEmpresa,
    validacaoAtualizar,
    validacaoDesativar
}