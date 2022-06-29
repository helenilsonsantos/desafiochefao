const { Pacientes } = require("../models/index");
const { Enderecos } = require("../../enderecos/models/index");

const PacienteService = {

    async cadastrarPaciente(endereco_id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar){
        const novoPaciente = await Pacientes.create({
            endereco_id,
            nome,
            cpf,
            data_nascimento,
            email,
            telefone,
            observacoes,
            avatar,
            situacao: "ativo"
        });
        
        return novoPaciente;
    },

    async pacienteExiste(cpf){
        const pacienteExiste = await Pacientes.count({
            where: {cpf}
        });

        return pacienteExiste;
    },

    async encontrarPaciente(id){
        const encontrarPaciente = await Pacientes.findByPk(id);
        
        if(!encontrarPaciente) {
            return false;
        };
        
        return encontrarPaciente;
    },

    async atualizarPaciente(id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar) {
        const atualizarPaciente = await Pacientes.update(
            {
                nome,
                cpf,
                data_nascimento,
                email,
                telefone,
                observacoes,
                avatar
            },
            {
                where: {
                    id
                },
            }
        );

        const pacienteAtualizado = PacienteService.encontrarPaciente(id);

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