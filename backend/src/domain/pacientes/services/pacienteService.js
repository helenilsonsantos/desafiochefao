const { Pacientes } = require("../models/Pacientes");
const { Enderecos } = require("../../enderecos/models/index");

const PacienteService = {

    async cadastrarPaciente(endereco_id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao){
        await Pacientes.create({
            endereco_id,
            nome,
            cpf,
            data_nascimento,
            email,
            telefone,
            observacoes,
            avatar,
            situacao
        });

        const novoPaciente = PacienteService.encontrarPacienteComEndereco(cpf);

        return novoPaciente;
    },

    async encontrarPaciente(id){
        const encontrarPaciente = await Pacientes.findByPk(id);
        
        if(encontrarPaciente === null) {
            return false;
        };

        return encontrarPaciente;
    },

    async encontrarPacienteComEndereco(cpf){
        const encontrarPaciente = await Pacientes.findAll({
            where: {
                cpf
            },
            include: [{
                model: Enderecos,
                required:true,
            }]
        });
        
        if(encontrarPaciente === null) {
            return false;
        };

        return encontrarPaciente[0];
    },

    async atualizarPaciente(id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao) {
        await Pacientes.update(
            {
                nome,
                cpf,
                data_nascimento,
                email,
                telefone,
                observacoes,
                avatar,
                situacao
            },
            {
                where: {
                    id
                },
            }
        );

        const pacienteAtualizado = PacienteService.encontrarPacienteComEndereco(cpf);

        return pacienteAtualizado;
    },

    async desativarPaciente(id) {
        const pacienteDesativado = await Pacientes.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    id
                },
            }
        );

        return pacienteDesativado;
    }

}

module.exports = PacienteService;