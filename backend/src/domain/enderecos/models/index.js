const Pacientes = require("../../pacientes/models/Pacientes");
const Enderecos = require("./Enderecos");

Enderecos.hasOne(Pacientes, {
    foreignKey: "endereco_id"
})

module.exports = {
    Enderecos
}