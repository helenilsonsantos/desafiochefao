const validacaoCadastrar =  require('./cadastrar')
const validacaoListarAtendimentoId = require('./listarAtendimentoId')
const validacaoListarAtendimentosdePaciente = require('./listarAtendimentosdePaciente')
const validacaoAtualizar = require('./atualizar')
const validacaoDesativar = require('./desativar')

module.exports = {
    validacaoCadastrar,
    validacaoListarAtendimentoId,
    validacaoListarAtendimentosdePaciente,
    validacaoAtualizar,
    validacaoDesativar
}