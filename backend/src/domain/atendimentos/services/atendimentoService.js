const { Atendimentos } = require("../models/index");
const { Pacientes } = require("../../pacientes/models/index");

const AtendimentoService = {

    async cadastrarAtendimento(cliente_id, medico_id, procedimentos_id, data, horario, situacao, anexos){
        const novoAtendimento = await Atendimentos.create({
            cliente_id, 
            medico_id, 
            procedimentos_id, 
            data, 
            horario, 
            situacao, 
            anexos,
            situacao: "ativo"
        });
        
        return novoAtendimento;
    },

    async atendimentoExiste(cpf){
        const atendimentoExiste = await Atendimentos.count({
            where: {paciente}
        });

        return atendimentoExiste;
    },

    async encontrarAtendimento(id){
        const encontrarAtendimento = await Atendimentos.findByPk(id);
        
        if(!encontrarAtendimento) {
            return false;
        };
        
        return encontrarAtendimento;
    },

    async atendimentoCompleto(id){
        const atendimentoCompleto = await Atendimentos.findAll({
            where: {
                id
            },
            include: [{
                model: Pacientes
            }]
        });
        
        return atendimentoCompleto;
    },

    async atualizarAtendimento(cliente_id, medico_id, procedimentos_id, data, horario, situacao, anexos) {
        const atualizarAtendimento = await Atendimentos.update(
            {
                cliente_id, 
                medico_id, 
                procedimentos_id, 
                data, 
                horario, 
                situacao, 
                anexos
            },
            {
                where: {
                    id
                },
            }
        );

        const atendimentoAtualizado = atendimentoService.encontrarAtendimento(id);

        return atendimentoAtualizado;
    },

    async desativarAtendimento(id) {
        const atendimentoDesativado = await Atendimentos.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    id
                },
            }
        );

        return atendimentoDesativado;
    }

}

module.exports = AtendimentoService;