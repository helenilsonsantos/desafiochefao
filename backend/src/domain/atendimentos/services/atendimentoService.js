const { Atendimentos } = require("../models/index");

const AtendimentoService = {

    async cadastrarAtendimento(cliente_id, dentista_id, procedimentos_id, data, horario, situacao, anexos){
        const novoAtendimento = await Atendimentos.create({
            cliente_id, 
            dentista_id, 
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

    async encontrarAtendimentoPaciente(paciente_id){
        const encontrarAtendimento = await Atendimentos.findAll({
            where: {
                paciente_id
            },  
        });
        
        if(!encontrarAtendimento) {
            return false;
        };
        
        return encontrarAtendimento;
    },

    async encontrarAtendimentoId(id){
        const encontrarAtendimento = await Atendimentos.findAll({
            where: {
                id
            },  
        });
        
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

    async atualizarAtendimento({id, paciente_id, dentista_id, data, horario, situacao, anexos}) {
        const atualizarAtendimento = await Atendimentos.update(
            {
                paciente_id, 
                dentista_id,  
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

        const atendimentoAtualizado = AtendimentoService.encontrarAtendimentoId(id);

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