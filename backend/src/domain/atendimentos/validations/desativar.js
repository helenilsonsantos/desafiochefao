const {validate, Joi} = require('express-validation')

const validacaoDeletar = validate({
    params:Joi.object({
        id: Joi.number().required(),
    })
})

module.exports = validacaoDeletar