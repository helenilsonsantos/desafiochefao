const {validate, Joi} = require('express-validation')

const validacaoDeletar = validate({
    params:Joi.object({
        idAtendimento: Joi.number().required(),
    })
})

module.exports = validacaoDeletar