const {validate, Joi} = require('express-validation')

const validacaoListarPacientesEmpresa = validate({
    params:Joi.object({
        idEmpresa: Joi.number().required(),
    })
})

module.exports = validacaoListarPacientesEmpresa