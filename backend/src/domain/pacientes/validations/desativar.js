const {validate, Joi} = require('express-validation')

const validacaoDesativar = validate({
    params:Joi.object({
        idPaciente: Joi.number().required(),
    })
})

module.exports = validacaoDesativar