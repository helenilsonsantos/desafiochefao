const Enderecos = require("../../enderecos/models/Enderecos");
const Pacientes = require("./Pacientes");

Pacientes.belongsTo(Enderecos, {
        foreignKey: "endereco_id"
    })

    
module.exports = {
    Pacientes
}