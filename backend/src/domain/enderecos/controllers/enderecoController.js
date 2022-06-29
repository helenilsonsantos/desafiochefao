const EnderecoService = require("../services/enderecoService");

const EnderecoController = {

    async cadastrar(rua, numero, bairro, cep, complemento, cidade, estado){
        try{
            const enderecoNovo = await EnderecoService.cadastrarEndereco(rua, numero, bairro, cep, complemento, cidade, estado);

            return res.status(201).json(enderecoNovo);

        } catch (error) {
            console.log(error);
            res.status(500).json("Ocorreu um erro ao cadastrar o endereço.");
        }
    },

    async atualizar(endereco_id, rua, numero, bairro, cep, complemento, cidade, estado){
        try{
            const enderecoAtualizado = await EnderecoService.atualizarEndereco(endereco_id, rua, numero, bairro, cep, complemento, cidade, estado);

            return res.status(200).json(enderecoAtualizado);
            
        } catch (error){
            res.status(500).json("Ocorreu um erro ao atualizar o endereço.")
        }
    },

    async desativar(endereco_id){
        try{
            const enderecoDesativado = await EnderecoService.desativarEndereco(endereco_id);

            return res.status(200).json(enderecoDesativado);
                   
        } catch (error){
            res.status(500).json("Ocorreu um erro ao deletar o endereço.")
        }
    }
}

module.exports = EnderecoController;
