const { validate, Joi } = require('express-validation');

const validaCadastrar = validate({
  body: Joi.object({
    nome: Joi.string().max(100).required(),
  }),
});

module.exports = validaCadastrar;
