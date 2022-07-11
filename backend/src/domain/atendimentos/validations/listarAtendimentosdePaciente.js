const {validate, Joi} = require('express-validation')

const validacaoListarAtendimentosdePaciente = validate({
    params:Joi.object({
        idPaciente: Joi.number().required(),
    })
})

module.exports = validacaoListarAtendimentosdePaciente