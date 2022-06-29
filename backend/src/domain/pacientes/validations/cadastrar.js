const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        nome:Joi.string().required(),
        cpf:Joi.number().required(),
        data_nascimento:Joi.date().required(),
        email:Joi.string().required(),
        telefone:Joi.number().required(),
        observacoes:Joi.string().required(),
        avatar:Joi.string().required(),
        situacao:Joi.string().required(),
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