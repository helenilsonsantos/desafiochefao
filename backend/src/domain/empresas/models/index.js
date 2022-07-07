const Empresas = require('./Empresas');
const Usuarios = require('../../usuarios/models/Usuarios');
const Pacientes = require('../../pacientes/models/Pacientes');

Empresas.hasMany(Usuarios, {
  foreignKey: 'empresa_id',
});

Empresas.hasMany(Pacientes, {
  foreignKey: 'empresa_id',
});

module.exports = {
  Empresas
};
