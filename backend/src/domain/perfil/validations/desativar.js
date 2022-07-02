const { validate, Joi } = require('express-validation');

const validaDesativar = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

module.exports = validaDesativar;
