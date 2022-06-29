const Enderecos = require("../../enderecos/models/Enderecos");
const Pacientes = require("./Pacientes");

Pacientes.associate = function() {
    Pacientes.hasOne(Enderecos, {
        foreignKey: "endereco_id"
    })
}
    
module.exports = {
    Pacientes
}