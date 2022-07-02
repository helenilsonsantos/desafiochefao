const Pagamento = require('../models/Pagamento');

const pagamentoController = {
  async criarPagto(req, res) {
    try {
      const { nome, observacoes } = req.body;

      const novoPagamento = await Pagamento.create({
        nome,
        observacoes,
      });

      return res.status(200).json(novoPagamento);
    } catch (error) {
      console.error(error);
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async listarPagto(req, res) {
    try {
      const mostraPagmto = await Pagamento.findAll();

      return res.status(200).json(mostraPagmto);
    } catch (error) {
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async atualizarPagto(req, res) {
    try {
      const { id } = req.params;
      const { nome, observacoes } = req.body;

      const procuraPagto = await Pagamento.update(
        { nome, observacoes },
        { where: { id } }
      );

      if (!procuraPagto) {
        return res.status(400).json('Informe um ID válido');
      }

      const atualizaPgto = await Pagamento.findByPk(id);

      return res.status(200).json(atualizaPgto);
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },

  async desativarPgto(req, res) {
    try {
      const { id } = req.params;

      const desativarPgto = await Pagamento.findOne({
        where: {
          id,
        },
      });
      if (desativarPgto) {
        await Pagamento.update(
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

module.exports = pagamentoController;
