const { validate, Joi } = require('express-validation');

const validarAtualizar = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string().max(200),
    logo: Joi.string().max(200),
  }),
});
module.exports = validarAtualizar;
