const { Enderecos } = require("../models");

const EnderecoService = {

    async cadastrarEndereco({ rua, numero, bairro, cep, complemento, cidade, estado }, transaction){
        const enderecoNovo = await Enderecos.create({
            rua, 
            numero,
            bairro,
            cep,
            complemento,
            cidade,
            estado
        }, {transaction});

        return enderecoNovo;
    },

    async encontrarEndereco(endereco_id){
        const encontrarEndereco = await Enderecos.findByPk(endereco_id);
        
        return encontrarEndereco;
    },

    async atualizarEndereco({ endereco_id, rua, numero, bairro, cep, complemento, cidade, estado }, transaction) {
        await Enderecos.update(
            {
                rua,
                numero,
                bairro,
                cep,
                complemento,
                cidade,
                estado
            },
            {
                where: {
                    id: endereco_id
                },
                transaction
            }
        );

        return;
    }
}

module.exports = EnderecoService;