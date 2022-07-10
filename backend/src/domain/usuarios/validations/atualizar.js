const { validate, Joi } =  require ('express-validation')

module.exports = validate ({
    params:Joi.object({
        idUsuario: Joi.number().required(),
    }),
    body: Joi.object ({
        nome_completo: Joi.string(),
        telefone: Joi.string(),
        email: Joi.string().email(),
        perfil: Joi.string(),
        senha: Joi.string().min(8),
        avatar: Joi.any()
    })
})