const { Atendimentos } = require("../models");
const { Usuarios } = require("../../usuarios/models");
const { Pacientes } = require("../../pacientes/models");

const AtendimentoService = {

    async cadastrarAtendimento({ paciente_id, dentista_id, descricao, data, horario, anexo, anotacoes }){
        const novoAtendimento = await Atendimentos.create({
            paciente_id, 
            dentista_id, 
            descricao, 
            data, 
            horario, 
            anexo,
            anotacoes
        });
        
        return novoAtendimento;
    },

    async atendimentoExiste(idAtendimento){
        const encontrarAtendimento = await Atendimentos.count({
            where: {
                id: idAtendimento
            }
        });
        
        return encontrarAtendimento;
    },

    async encontrarAtendimentoPorId(idAtendimento){
        const encontrarAtendimento = await Atendimentos.findAll({
            where: {
                id: idAtendimento
            },
            include: [{
                model: Pacientes,
                attributes: [ "nome" ]
            },{
                model: Usuarios,
                attributes: [ "nome_completo" ]
            }]
        });
        
        return encontrarAtendimento;
    },

    async encontrarAtendimentosDePaciente(idPaciente){
        const encontrarAtendimento = await Atendimentos.findAll({
            where: {
                paciente_id: idPaciente
            },
            include: [{
                model: Pacientes,
                attributes: [ "nome" ]
            },{
                model: Usuarios,
                attributes: [ "nome_completo" ]
            }]
        });
        
        return encontrarAtendimento;
    },

    async atualizarAtendimento({ idAtendimento, descricao, data, horario, anexo, anotacoes }) {
        await Atendimentos.update(
            {
                descricao,
                data, 
                horario, 
                anexo,
                anotacoes
            },
            {
                where: {
                    id: idAtendimento
                },
            }
        );

        const atendimentoAtualizado = AtendimentoService.encontrarAtendimentoPorId(idAtendimento);

        return atendimentoAtualizado;
    },

    async desativarAtendimento(idAtendimento) {
        const atendimentoDesativado = await Atendimentos.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    id: idAtendimento
                },
            }
        );

        return atendimentoDesativado;
    }

}

module.exports = AtendimentoService;