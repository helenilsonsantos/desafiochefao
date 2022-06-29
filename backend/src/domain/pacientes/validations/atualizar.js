const {validate, Joi} = require('express-validation')

const validacaoAtualizar = validate({
    params:Joi.object({
        id: Joi.number().required(),
    }),
    body:Joi.object({
        nome:Joi.string(),
        cpf:Joi.string(),
        data_nascimento:Joi.date(),
        email:Joi.string(),
        telefone:Joi.string(),
        observacoes:Joi.string(),
        avatar:Joi.string(),
        rua:Joi.string(),
        numero:Joi.string(),
        bairro:Joi.string(),
        cep:Joi.number(),
        complemento:Joi.string(),
        cidade:Joi.string(),
        estado:Joi.string()
    })
})

module.exports = validacaoAtualizar