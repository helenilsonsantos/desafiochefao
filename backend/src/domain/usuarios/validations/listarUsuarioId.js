const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    params:Joi.object({
        idUsuario: Joi.number().required(),
    })
})