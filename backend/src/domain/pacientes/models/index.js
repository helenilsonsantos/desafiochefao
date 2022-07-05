const Enderecos = require("../../enderecos/models/Enderecos");
const Atendimentos = require("../../atendimentos/models/Atendimentos");
const Pacientes = require("../../pacientes/models/Pacientes");

Pacientes.belongsTo(Enderecos, {
        foreignKey: "endereco_id"
    })

Pacientes.hasMany(Atendimentos, {
        foreignKey: "paciente_id"
    })
    
module.exports = {
    Pacientes
}