const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    body: Joi.object ({
        nome_completo: Joi.string().required(),
        telefone: Joi.string().required(),
        email: Joi.string().email().required(),
        perfil: Joi.string().required(),
        senha: Joi.string().min(8).required(),
        situacao: Joi.string().required(),
        avatar: Joi.string(),
    })
})