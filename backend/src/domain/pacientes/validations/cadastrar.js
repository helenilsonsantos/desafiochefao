const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        endereco_id:Joi.number().required(),
        nome:Joi.string().required(),
        cpf:Joi.number().required(),
        data_nascimento:Joi.date().required(),
        email:Joi.string().required(),
        telefone:Joi.number().required(),
        observacoes:Joi.string().required(),
        avatar:Joi.string().required(),
        situacao:Joi.string().required()
    })
})

module.exports = validacaoCadastrar