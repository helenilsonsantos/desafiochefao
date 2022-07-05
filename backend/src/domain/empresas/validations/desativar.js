const { validate, Joi } = require('express-validation');

const validarDesativar = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

module.exports = validarDesativar;
