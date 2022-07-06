const Pacientes = require("../../pacientes/models/Pacientes");
const Atendimentos = require("./Atendimentos");

Atendimentos.belongsTo(Pacientes, {
        foreignKey: "paciente_id"
    })

    
module.exports = {
    Atendimentos
}