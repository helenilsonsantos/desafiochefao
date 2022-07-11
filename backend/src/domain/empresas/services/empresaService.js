const { Empresas } = require('../models');

const EmpresaService = {

  async cadastrarEmpresa({ nome_empresa, cnpj, logo }, transaction) {
    const empresaNova = await Empresas.create({
      nome_empresa,
      cnpj,
      logo
    }, {transaction});

    return empresaNova;
  },

  async empresaExiste(cnpj) {
    const empresaExiste = await Empresas.count({
      where: {cnpj}
    });

    return empresaExiste;
  },

  async atualizarEmpresa({ empresa_id, nome_empresa, cnpj, logo }) {
    await Empresas.update(
        {
          nome_empresa,
          cnpj,
          logo
        },
        {
            where: {
                id: empresa_id
            }
        });

    return;
  }
};

module.exports = EmpresaService;
