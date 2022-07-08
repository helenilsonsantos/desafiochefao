const { validate, Joi } = require('express-validation');

const validarListar = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

module.exports = validarListar;
