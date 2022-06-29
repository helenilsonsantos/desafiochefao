const {validate, Joi} = require('express-validation')

const validacaoAtualizar = validate({
    params:Joi.object({
        id: Joi.number().required(),
    }),
    body:Joi.object({
        endereco_id:Joi.number(),
        nome:Joi.string(),
        cpf:Joi.number(),
        data_nascimento:Joi.date(),
        email:Joi.string(),
        telefone:Joi.number(),
        observacoes:Joi.string(),
        avatar:Joi.string(),
        situacao:Joi.string()
    })
})

module.exports = validacaoAtualizar