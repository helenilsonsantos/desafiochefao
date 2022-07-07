const {validate, Joi} = require('express-validation')

const validacaoListarAtendimentoId = validate({
    params:Joi.object({
        idAtendimento: Joi.number().required(),
    })
})

module.exports = validacaoListarAtendimentoId