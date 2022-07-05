const Empresas = require('./Empresas');
const Usuarios = require('../../usuarios/models/Usuarios');

Empresas.hasMany(Usuarios, {
  foreignKey: 'empresa_id',
});

module.exports = {
  Empresas,
};
