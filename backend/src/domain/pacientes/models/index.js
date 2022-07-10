const Enderecos = require("../../enderecos/models/Enderecos");
const Empresas = require("../../empresas/models/Empresas");
const Atendimentos = require("../../atendimentos/models/Atendimentos");
const Pacientes = require("./Pacientes");

Pacientes.belongsTo(Enderecos, {
    foreignKey: "endereco_id"
});

Pacientes.belongsTo(Empresas, {
    foreignKey: "empresa_id"
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "paciente_id"
});
    
module.exports = {
    Pacientes
}