const Usuarios = require('./Usuarios')
const Empresas = require('../../empresas/models/Empresas')
const Atendimentos = require("../../atendimentos/models/Atendimentos")

Usuarios.belongsTo(Empresas, {
    foreignKey: "empresa_id"
});

Usuarios.hasMany(Atendimentos, {
    foreignKey: "dentista_id"
});

module.exports = {
    Usuarios
}