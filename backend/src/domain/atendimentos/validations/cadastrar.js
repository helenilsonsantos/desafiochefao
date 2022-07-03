const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        nome:Joi.string(),
        data:Joi.date(),
        horario:Joi.string(),
        valor:Joi.string(),
        observacoes:Joi.string(),
        situacao:Joi.string(),
        anexos:Joi.string(),
    })
})

module.exports = validacaoCadastrar