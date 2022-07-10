const EmpresaService = require('../services/empresaService');

const EmpresasController = {
  
  async cadastrarEmpresa({ nome_empresa, cnpj, logo }, transaction) {
    try {
      const empresaNova = await EmpresaService.cadastrarEmpresa({ nome_empresa, cnpj, logo }, transaction);

      return empresaNova;

    } catch (error) {
      console.log(error);
    }
  },

  async atualizarEmpresa({ empresa_id, nome_empresa, cnpj, logo }) {
    try {
      const empresaExiste = await EmpresaService.empresaExiste(cnpj);

      if (!empresaExiste) {
        return res.status(400).json("Erro: empresa não encontrada.");
      }

      await EmpresaService.atualizarEmpresa({ empresa_id, nome_empresa, cnpj, logo });

      return;
      
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EmpresasController;
