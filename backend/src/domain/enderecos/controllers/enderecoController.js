const EnderecoService = require("../services/enderecoService");

const EnderecoController = {

    async cadastrarEndereco({ rua, numero, bairro, cep, complemento, cidade, estado }, transaction){
        try{
            const enderecoNovo = await EnderecoService.cadastrarEndereco({ rua, numero, bairro, cep, complemento, cidade, estado }, transaction);

            return enderecoNovo;

        } catch (error) {
            console.log(error);
        }
    },

    async atualizarEndereco({ endereco_id, rua, numero, bairro, cep, complemento, cidade, estado }, transaction){
        try{
            const enderecoAtualizado = await EnderecoService.atualizarEndereco({ endereco_id, rua, numero, bairro, cep, complemento, cidade, estado }, transaction);

            return enderecoAtualizado;
            
        } catch (error){
            console.log(error);
        }
    }
}

module.exports = EnderecoController;
