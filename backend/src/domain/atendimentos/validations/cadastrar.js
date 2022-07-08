const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        paciente_id:Joi.number().required(),
        dentista_id: Joi.number().required(),
        descricao: Joi.string(),
        data:Joi.date().required(),
        horario: Joi.string().required(),
        anexo: Joi.any(),
        anotacoes:Joi.string().required(),
    })
})

module.exports = validacaoCadastrar