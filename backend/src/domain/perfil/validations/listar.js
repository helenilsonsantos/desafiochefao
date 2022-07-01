const { validate, Joi } = require('express-validation');

const validaListar = validate({
  params: Joi.object({
    id: Joi.number(),
  }),
});

module.exports = validaListar;
