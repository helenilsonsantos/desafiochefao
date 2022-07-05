const Pacientes = require("../../pacientes/models/Pacientes");
const Enderecos = require("./Enderecos");
// const Usuarios = require("../../usuarios/models/Usuarios");

Enderecos.hasOne(Pacientes, {
    foreignKey: "endereco_id"
})

// Enderecos.belongsTo(Usuarios, {
//     foreignKey: "endereco_id",
// })

module.exports = {
    Enderecos
}