const EnderecoService = require("../services/enderecoService");

const EnderecoController = {

    async cadastrar({rua, numero, bairro, cep, complemento, cidade, estado}, transaction){
        try{
            const enderecoNovo = await EnderecoService.cadastrarEndereco({rua, numero, bairro, cep, complemento, cidade, estado}, transaction);

            return enderecoNovo;

        } catch (error) {
            console.log(error);
        }
    },

    async mostrar(endereco_id){
        try{
            const enderecoSendoExibido = await EnderecoService.encontrarEndereco(endereco_id);
           
            return enderecoSendoExibido;
            
        } catch (error){
            console.log(error);
        }
    },

    async atualizar({endereco_id, rua, numero, bairro, cep, complemento, cidade, estado}, transaction){
        try{
            const enderecoAtualizado = await EnderecoService.atualizarEndereco({endereco_id, rua, numero, bairro, cep, complemento, cidade, estado}, transaction);

            return enderecoAtualizado;
            
        } catch (error){
            console.log(error);
        }
    },

    // async desativar(endereco_id){
    //     try{
    //         const enderecoDesativado = await EnderecoService.desativarEndereco(endereco_id);

    //         return enderecoDesativado;
                   
    //     } catch (error){
    //         console.log(error);
    //     }
    // }
}

module.exports = EnderecoController;
