const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        nome:Joi.string().required(),
        cpf:Joi.string().required(),
        data_nascimento:Joi.date().required(),
        email:Joi.string().required(),
        telefone:Joi.string().required(),
        observacoes:Joi.string().required(),
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