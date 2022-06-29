const {validate, Joi} = require('express-validation')

const validacaoListar = validate({
    params:Joi.object({
        id: Joi.number().required(),
    })
})

module.exports = validacaoListar