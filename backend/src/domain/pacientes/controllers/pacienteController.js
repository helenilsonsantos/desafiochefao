const PacienteService = require("../services/pacienteService");
const EnderecoController = require("../../enderecos/controllers/enderecoController");

const PacienteController = {

    async cadastrar(req,res){
        try{
            const { nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            const pacienteExiste = await PacienteService.encontrarPaciente(cpf);

            if (pacienteExiste !== false){
                return res.status(400).json("CPF já cadastrado!")
            }

            const enderecoNovo = await EnderecoController.cadastrar(rua, numero, bairro, cep, complemento, cidade, estado);
            const endereco_id = enderecoNovo.id;

            const pacienteNovo = await PacienteService.cadastrarPaciente(endereco_id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao);

            return res.status(201).json(pacienteNovo);

        } catch (error) {
            console.log(error)
            res.status(500).json("Ocorreu um erro ao cadastrar o paciente.")
        }
    },

    async mostrar(req,res){
        try{
            const { id } = req.params;
            const pacienteExiste = await PacienteService.encontrarPaciente(id);

            if(!pacienteExiste){
                return res.status(404).json("Usuário não encontrado.")
            }
            
            const listarPaciente = await PacienteService.encontrarPacienteComEndereco(pacienteExiste.cpf);

            return res.status(200).json(listarPaciente);
            
        } catch (error){
            res.status(500).json("Ocorreu um erro ao procurar o paciente.")
        }
    },

    async atualizar(req,res){
        try{
            const { id } = req.params;
            const { nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            const pacienteExiste = await PacienteService.encontrarPaciente(id);
    
            if(pacienteExiste === false) {
                return res.status(404).json("Paciente não encontrado.")
            }
            
            const endereco_id = pacienteExiste.endereco_id;
            
            await EnderecoController.atualizar(endereco_id, rua, numero, bairro, cep, complemento, cidade, estado);

            const pacienteAtualizado = await PacienteService.atualizarpaciente(nome, cpf, data_nascimento, email, telefone, observacoes, avatar, situacao);

            return res.status(200).json(pacienteAtualizado);
            
        } catch (error){
            res.status(500).json("Ocorreu um erro ao atualizar o paciente.")
        }
    },

    async desativar(req,res){
        try{
            const { id } = req.params
            const pacienteExiste = await PacienteService.encontrarPaciente(id);

            if(pacienteExiste === false) {
                return res.status(404).json("Paciente não encontrado.")
            }
            
            const endereco_id = pacienteExiste.endereco_id;

            await EnderecoController.desativar(endereco_id);

            const pacienteDesativado = await PacienteService.desativarPaciente(id);

            return res.status(204).json(pacienteDesativado);
                   
        } catch (error){
            res.status(500).json("Ocorreu um erro ao deletar o paciente.")
        }
    }
}

module.exports = PacienteController;
