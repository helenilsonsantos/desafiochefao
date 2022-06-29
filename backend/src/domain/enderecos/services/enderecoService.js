const { Enderecos } = require("../models/index");

const EnderecoService = {

    async cadastrarEndereco(rua, numero, bairro, cep, complemento, cidade, estado){
        const enderecoNovo = await Enderecos.create({
            rua, 
            numero,
            bairro,
            cep,
            complemento,
            cidade,
            estado
        });

        return enderecoNovo;
    },

    async encontrarEndereco(endereco_id){
        const encontrarEndereco = await Enderecos.findByPk(endereco_id);
        
        if(!encontrarEndereco) {
            return false;
        };

        return encontrarEndereco;
    },

    async atualizarEndereco(endereco_id, rua, numero, bairro, cep, complemento, cidade, estado) {
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
            }
        );

        const enderecoAtualizado = await EnderecoService.encontrarEndereco(endereco_id);

        return enderecoAtualizado;
    },

    // async desativarEndereco(endereco_id) {
    //     const enderecoDesativado = await Enderecos.update(
    //         {
    //             situacao: "inativo"
    //         },
    //         {
    //             where: {
    //                 endereco_id
    //             },
    //         }
    //     );

    //     return enderecoDesativado;
    // }

}

module.exports = EnderecoService;