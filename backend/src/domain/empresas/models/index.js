const Empresas = require('./Empresas');
const Usuarios = require('../../models/Usuarios');

Empresas.hasMany(Usuarios, {
  foreignKey: 'empresa_id',
});

module.exports = {
  Empresas,
};
