const Perfil = require('../models/Perfil');

const perfilController = {
  async criarPerfil(req, res) {
    try {
      const { nome, situacao } = req.body;

      const validaPerfil = await Perfil.findOne({ where: { nome } });

      if (validaPerfil) {
        return res.status(400).json('Esse perfil já existe!');
      }

      const novoPerfil = await Perfil.create({
        nome,
        situacao,
      });

      return res.status(200).json(novoPerfil);
    } catch (error) {
      console.error(error);
      return res.status(400).json('Não foi possível criar o perfil');
    }
  },

  async listaPerfil(req, res) {
    try {
      const mostrarPerfil = await Perfil.findAll();

      return res.status(200).json(mostrarPerfil);
    } catch (error) {
      return res.status(400).json('Ocorreu algum erro');
    }
  },

  async atualizaPerfil(req, res) {
    try {
      const { id } = req.params;
      const { nome, situacao } = req.body;

      const procuraPerfil = await Perfil.count({ where: { id } });

      if (!procuraPerfil) {
        return res.status(400).json('Perfil não encontrado!');
      }

      await Perfil.update(
        {
          nome,
          situacao,
        },
        { where: { id } }
      );
      return res.status(200).json({ nome, situacao });
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },

  async desativaPerfil(req, res) {
    try {
      const { id } = req.params;

      const desativa = await Perfil.findOne({
        where: {
          id,
        },
      });
      if (desativa) {
        await Perfil.update(
          { situacao: 'inativo' },
          {
            where: {
              id,
            },
          }
        );
        return res.status(200).json('Perfil invativo');
      }
      return res.status(404).json('Perfil não encontrado');
    } catch (error) {
      res.status(400).json('Ocorreu algum problema');
    }
  },
};
module.exports = perfilController;
