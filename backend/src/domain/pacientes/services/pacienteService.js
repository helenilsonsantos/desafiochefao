const { Pacientes } = require("../models");
const { Enderecos } = require("../../enderecos/models");

const PacienteService = {

    async cadastrarPaciente({ endereco_id, empresa_id, nome, cpf, data_nascimento, email, telefone, observacoes }, transaction){
        const novoPaciente = await Pacientes.create({
            endereco_id,
            empresa_id,
            nome,
            cpf,
            data_nascimento,
            email,
            telefone,
            observacoes
        }, {transaction});
        
        return novoPaciente;
    },

    async pacienteExiste(cpf){
        const pacienteExiste = await Pacientes.count({
            where: {cpf}
        });

        return pacienteExiste;
    },

    async encontrarPacientePorId(idPaciente){
        const encontrarPaciente = await Pacientes.findByPk(idPaciente);
        
        return encontrarPaciente;
    },

    async listarPacientesDeEmpresa(idEmpresa){
        const listarPacientes = await Pacientes.findAll({
            where: {
                empresa_id: idEmpresa
            }
        });
        
        return listarPacientes;
    },

    async pacienteCompleto(idPaciente){
        const pacienteCompleto = await Pacientes.findAll({
            where: {
                id: idPaciente
            },
            include: [{
                model: Enderecos
            }]
        });
        
        return pacienteCompleto;
    },

    async atualizarPaciente({ idPaciente, nome, cpf, data_nascimento, email, telefone, observacoes }, transaction) {
        await Pacientes.update(
            {
                nome,
                cpf,
                data_nascimento,
                email,
                telefone,
                observacoes
            },
            {
                where: {
                    id: idPaciente
                },
                transaction
            }
        );

        return;
    },

    async desativarPaciente(idPaciente) {
        const pacienteDesativado = await Pacientes.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    id: idPaciente
                },
            }
        );

        return pacienteDesativado;
    }

}

module.exports = PacienteService;