const {validate, Joi} = require('express-validation')

const validacaoCadastrar = validate({
    body:Joi.object({
        paciente_id:Joi.string(),
        dentista_id: Joi.string(),
        data:Joi.date(),
        horario:Joi.string(),
        valor:Joi.string(),
        observacoes:Joi.string(),
    })
})

module.exports = validacaoCadastrar