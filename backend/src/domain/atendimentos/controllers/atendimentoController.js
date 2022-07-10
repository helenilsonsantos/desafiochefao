const Atendimento = require('../models/Atendimentos');
const AtendimentoService = require('../services/atendimentoService');

const atendimentoController = {
  async criarAtendimento(req, res) {
    try {
      const { paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes } = req.body;

      const novoAtendimento = await AtendimentoService.cadastrarAtendimento({
        paciente_id,
        dentista_id,
        descricao,
        data,
        horario,
        anexos,
        anotacoes
      });

      return res.status(200).json(novoAtendimento);
    } catch (error) {
      console.error(error);
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async listarAtendimento(req, res) {
    try {
      const { id } = req.params;
      const mostrarAtendimentos = await AtendimentoService.encontrarAtendimentoPaciente(id);

      return res.status(200).json(mostrarAtendimentos);
    } catch (error) {
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async atualizarAtendimento(req, res) {
    try {
      const { id } = req.params;
      const { paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes } = req.body;

      const procurarAtendimento = await AtendimentoService.atualizarAtendimento(
        { id, paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes },
      
      );

      if (!procurarAtendimento) {
        return res.status(400).json('Informe um ID válido');
      }

      const atualizarAtendimento = await AtendimentoService.encontrarAtendimentoId(id);

      return res.status(200).json(atualizarAtendimento);
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },

  async desativarAtendimento(req, res) {
    try {
      const { id } = req.params;

      const desativarAtendimento = await AtendimentoService.desativarAtendimento(id)
      if (desativarAtendimento) {
        await Atendimento.update(
          { situacao: 'inativo' },
          {
            where: {
              id,
            },
          }
        );
        return res.status(204).json('Inativo');
      }
      return res.status(404).json('Não encontrado');
    } catch (error) {
      return res.status(404).json('Ocorreu algum erro');
    }
  },
};

module.exports = atendimentoController;