const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    params:Joi.object({
        idEmpresa: Joi.number().required(),
    })
})