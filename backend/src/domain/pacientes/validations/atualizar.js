const {validate, Joi} = require('express-validation')

const validacaoAtualizar = validate({
    params:Joi.object({
        id: Joi.number().required(),
    }),
    body:Joi.object({
        nome:Joi.string(),
        cpf:Joi.number(),
        data_nascimento:Joi.date(),
        email:Joi.string(),
        telefone:Joi.number(),
        observacoes:Joi.string(),
        avatar:Joi.string(),
        situacao:Joi.string(),
        rua:Joi.string(),
        numero:Joi.number(),
        bairro:Joi.string(),
        cep:Joi.number(),
        complemento:Joi.string(),
        cidade:Joi.string(),
        estado:Joi.string()
    })
})

module.exports = validacaoAtualizar