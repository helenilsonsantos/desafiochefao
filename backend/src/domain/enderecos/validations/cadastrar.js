const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        rua:Joi.string().required(),
        numero:Joi.number().required(),
        bairro:Joi.string().required(),
        cep:Joi.number().required(),
        complemento:Joi.string(),
        cidade:Joi.string().required(),
        estado:Joi.string().required()
    })
})

module.exports = validacaoCadastrar