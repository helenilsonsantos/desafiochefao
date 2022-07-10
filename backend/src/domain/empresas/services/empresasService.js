const Empresas = require('../models/Empresas');

const EmpresasService = {
  async cadastrarEmpresa(nome, cnpj, logo) {
    const novaEmpresa = await Empresas.create({
      nome,
      cnpj,
      logo,
    });

    return novaEmpresa;
  },

  async empresaExiste(cnpj) {
    const buscaEmpresa = await Empresas.findAll({
      where: {
        cnpj,
      },
    });

    if (buscaEmpresa.length === 0) {
      return false;
    }

    return buscaEmpresa;
  },

  async buscaEmpresa(id) {
    const empresaID = await Empresas.findByPk(id);

    if (!empresaID) {
      return false;
    }

    return empresaID;
  },

  async atualizaEmpresa(id, nome, logo) {
    const atualizaEmpresa = await Empresas.update(
      { nome, logo },
      {
        where: { id },
      }
    );

    return atualizaEmpresa;
  },

  async desativaEmpresa(id) {
    const desaviaEmpresa = await Empresas.update(
      { situacao: 'inativo' },
      {
        where: { id },
      }
    );

    return desaviaEmpresa;
  },
};

module.exports = EmpresasService;
