const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    body: Joi.object ({
        nome_empresa: Joi.string().required(),
        cnpj: Joi.string().required(),
        logo: Joi.any(),
        nome_completo: Joi.string().required(),
        telefone: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required(),
        avatar: Joi.any()
    })
})