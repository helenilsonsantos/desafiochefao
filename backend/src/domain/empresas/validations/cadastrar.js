const { validate, Joi } = require('express-validation');

const validarCadastrar = validate({
  body: Joi.object({
    nome: Joi.string().max(200).required(),
    cnpj: Joi.string().required(),
    logo: Joi.string().max(200),
  }),
});
module.exports = validarCadastrar;
