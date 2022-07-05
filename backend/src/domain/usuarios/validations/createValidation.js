const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    body: Joi.object ({
        empresa_id: Joi.number().required(),
        nome_completo: Joi.string().required(),
        telefone: Joi.string().required(),
        email: Joi.string().email().required(),
        perfil: Joi.string().required(),
        senha: Joi.string().min(8).required(),
        situacao: Joi.string(),
        avatar: Joi.string()
    })
})