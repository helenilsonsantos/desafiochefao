const Atendimento = require('../models/Atendimentos');

const atendimentoController = {
  async criarAtendimento(req, res) {
    try {
      const { paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes } = req.body;

      const novoAtendimento = await Atendimento.create({
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
      const mostrarAtendimento = await Atendimento.findAll();

      return res.status(200).json(mostrarAtendimento);
    } catch (error) {
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async atualizarAtendimento(req, res) {
    try {
      const { id } = req.params;
      const { paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes } = req.body;

      const procurarAtendimento = await Atendimento.update(
        { paciente_id, dentista_id, descricao, data, horario, anexos, anotacoes },
        { where: { id } }
      );

      if (!procurarAtendimento) {
        return res.status(400).json('Informe um ID válido');
      }

      const atualizarAtendimento = await Atendimento.findByPk(id);

      return res.status(200).json(atualizarAtendimento);
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },

  async desativarAtendimento(req, res) {
    try {
      const { id } = req.params;

      const desativarAtendimento = await Atendimento.findOne({
        where: {
          id,
        },
      });
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