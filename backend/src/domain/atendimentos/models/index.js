const Pacientes = require("../../pacientes/models/Pacientes");
const Usuarios = require("../../usuarios/models/Usuarios");
const Atendimentos = require("./Atendimentos");

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "paciente_id"
})

Atendimentos.belongsTo(Usuarios, {
    foreignKey: "dentista_id"
})

module.exports = {
    Atendimentos
}