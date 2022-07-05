const EmpresasService = require('../services/empresasService');

const EmpresasController = {
  async cadastrar(req, res) {
    try {
      const { nome, cnpj, logo } = req.body;
      const EncontraEmpresa = await EmpresasService.empresaExiste(cnpj);

      if (EncontraEmpresa) {
        return res.status(400).json('CNPJ já existe');
      }

      const novaEmpresa = await EmpresasService.cadastrarEmpresa(
        nome,
        cnpj,
        logo
      );

      return res.status(200).json(novaEmpresa);
    } catch (error) {
      res.status(400).json('Erro ao cadastrar empresa!');
    }
  },

  async listar(req, res) {
    try {
      const { id } = req.params;

      const mostraEmpresa = await EmpresasService.buscaEmpresa(id);

      if (!mostraEmpresa) {
        return res.status(400).json('Informe um ID válido');
      }

      return res.status(200).json(mostraEmpresa);
    } catch (error) {
      return res.status(400).json('Erro ao buscar empresa!');
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, logo } = req.body;

      const checaEmpresa = await EmpresasService.buscaEmpresa(id);

      if (!checaEmpresa) {
        return res.status(400).json('Informe um ID válido');
      }

      await EmpresasService.atualizaEmpresa(id, nome, logo);
      const atualizada = { nome, logo };

      return res.status(200).json(atualizada);
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },

  async desativar(req, res) {
    try {
      const { id } = req.params;

      const checaEmpresa = await EmpresasService.buscaEmpresa(id);

      if (!checaEmpresa) {
        return res.status(400).json('Informe um ID válido');
      }

      const desativada = await EmpresasService.desativaEmpresa(id);

      return res.status(200).json('Empresa invativa');
    } catch (error) {
      return res.status(400).json('Ocorreu um erro');
    }
  },
};

module.exports = EmpresasController;
