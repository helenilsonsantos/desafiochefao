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
                    endereco_id
                },
            }
        );

        const enderecoAtualizado = await Enderecos.findByPk(endereco_id);

        return enderecoAtualizado;
    },

    async desativarEndereco(endereco_id) {
        const enderecoDesativado = await Enderecos.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    endereco_id
                },
            }
        );

        return enderecoDesativado;
    }

}

module.exports = EnderecoService;