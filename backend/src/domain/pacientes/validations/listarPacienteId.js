const {validate, Joi} = require('express-validation')

const validacaoListarPacienteId = validate({
    params:Joi.object({
        idPaciente: Joi.number().required(),
    })
})

module.exports = validacaoListarPacienteId