const Pacientes = require("../../pacientes/models/Pacientes");
const Usuarios = require("../../usuarios/models/Usuarios");
const Enderecos = require("./Enderecos");

Enderecos.belongsTo(Pacientes, {
    foreignKey: "endereco_id",
})

Enderecos.belongsTo(Usuarios, {
    foreignKey: "endereco_id",
})

module.exports = {
    Enderecos
}