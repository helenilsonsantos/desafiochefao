const {validate, Joi} = require('express-validation')

const validacaoAtualizar = validate({
    params:Joi.object({
        idPaciente: Joi.number().required(),
    }),
    body:Joi.object({
        nome:Joi.string(),
        cpf:Joi.string(),
        data_nascimento:Joi.date(),
        email:Joi.string().email(),
        telefone:Joi.string(),
        observacoes:Joi.string(),
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