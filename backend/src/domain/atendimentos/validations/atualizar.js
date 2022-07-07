const {validate, Joi} = require('express-validation')

const validacaoAtualizar = validate({
    params:Joi.object({
        idAtendimento: Joi.number().required(),
    }),
    body:Joi.object({
        paciente_id: Joi.number(),
        dentista_id: Joi.number(),
        descricao:Joi.string(),
        data:Joi.string(),
        horario:Joi.string(),
        anexo: Joi.any(),
        anotacoes:Joi.string(),
    })
})

module.exports = validacaoAtualizar