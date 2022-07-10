const cloudinary = require ('../../../configs/cloudinary');
const fs = require ('fs');
const AtendimentoService = require('../services/atendimentoService');

const AtendimentoController = {
  
  async cadastrarAtendimento(req, res) {
    try {
      const { paciente_id, dentista_id, descricao, data, horario, anotacoes } = req.body;

      var anexo = req.files[0];
      var atendimentoNovo;

      if(anexo) {
        const uploadPath = await cloudinary.uploads(anexo.path, 'anexo');
        fs.unlinkSync(anexo.path);
        atendimentoNovo = await AtendimentoService.cadastrarAtendimento({ paciente_id, dentista_id, descricao, data, horario, anexo: uploadPath.url, anotacoes });

      } else {
      atendimentoNovo = await AtendimentoService.cadastrarAtendimento({ paciente_id, dentista_id, descricao, data, horario, anexo, anotacoes });

      }

      return res.status(200).json(atendimentoNovo);

    } catch (error) {
      console.error(error);
      return res.status(400).json("Ocorreu um erro ao cadastrar o atendimento.");
    }
  },

  async mostrarAtendimentoPorId(req, res) {
    try {
      const { idAtendimento } = req.params;
      const atendimentoExiste = await AtendimentoService.atendimentoExiste(idAtendimento);

      if(atendimentoExiste === 0){
        return res.status(404).json("Erro: atendimento não encontrado.");
      }

      const mostrarAtendimentos = await AtendimentoService.encontrarAtendimentoPorId(idAtendimento);

      return res.status(200).json(mostrarAtendimentos);

    } catch (error) {
      return res.status(400).json("Ocorreu um erro ao recuperar informações do antendimento.");
    }
  },

  async mostrarAtendimentosDePaciente(req, res) {
    try {
      const { idPaciente } = req.params;

      const mostrarAtendimentos = await AtendimentoService.encontrarAtendimentosDePaciente(idPaciente);

      return res.status(200).json(mostrarAtendimentos);

    } catch (error) {
      return res.status(400).json("Ocorreu um erro ao recuperar os atendimentos do paciente.");
    }
  },

  async atualizarAtendimento(req, res) {
    try {
      const { idAtendimento } = req.params;
      const { descricao, data, horario, anotacoes } = req.body;
      const mostrarAtendimentos = await AtendimentoService.atendimentoExiste(idAtendimento);

      if(mostrarAtendimentos === 0){
        return res.status(404).json("Erro: atendimento não encontrado.");
      }

      var anexo = req.files[0];
      var atendimentoAtualizado;

      if(anexo) {
        const uploadPath = await cloudinary.uploads(anexo.path, 'anexo');
        fs.unlinkSync(anexo.path);
        atendimentoAtualizado = await AtendimentoService.atualizarAtendimento({ idAtendimento, descricao, data, horario, anexo: uploadPath.url, anotacoes });

      } else {
        atendimentoAtualizado = await AtendimentoService.atualizarAtendimento({ idAtendimento, descricao, data, horario, anotacoes });      
      }

      return res.status(200).json(atendimentoAtualizado);

    } catch (error) {
      return res.status(400).json("Ocorreu um erro ao atualizar o atendimento.");
    }
  },

  async desativarAtendimento(req, res) {
    try {
      const { idAtendimento } = req.params;
      const mostrarAtendimentos = await AtendimentoService.encontrarAtendimentoPorId(idAtendimento);

      if(!mostrarAtendimentos){
        return res.status(404).json("Erro: atendimento não encontrado.");
      }

      await AtendimentoService.desativarAtendimento(idAtendimento)
      
      return res.status(200).json("Atendimento excluído");
    
    } catch (error) {
      return res.status(404).json("Ocorreu um erro ao excluir o atendimento.");
    }
  },
};

module.exports = AtendimentoController;