const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        nome:Joi.string().required(),
        cpf:Joi.string().required(),
        data_nascimento:Joi.string().required(),
        email:Joi.string().email().required(),
        telefone:Joi.string().required(),
        observacoes:Joi.string().required(),
        empresa_id:Joi.number().required(),
        rua:Joi.string().required(),
        numero:Joi.number().required(),
        bairro:Joi.string().required(),
        cep:Joi.string().required(),
        complemento:Joi.string(),
        cidade:Joi.string().required(),
        estado:Joi.string().required()
    })
})

module.exports = validacaoCadastrar