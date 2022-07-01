const { validate, Joi } = require('express-validation');

const validaAtualizar = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string().max(100).required(),
    situacao: Joi.string().required(),
  }),
});

module.exports = validaAtualizar;
