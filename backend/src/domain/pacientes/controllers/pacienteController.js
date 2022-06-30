const PacienteService = require("../services/pacienteService");
const EnderecoController = require("../../enderecos/controllers/enderecoController");

const PacienteController = {

    async cadastrar(req,res){
        try{
            const { nome, cpf, data_nascimento, email, telefone, observacoes, avatar, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            const pacienteExiste = await PacienteService.pacienteExiste(cpf);

            if (pacienteExiste !== 0){
                return res.status(400).json("CPF já cadastrado!")
            }

            const enderecoNovo = await EnderecoController.cadastrar(rua, numero, bairro, cep, complemento, cidade, estado);
            const endereco_id = enderecoNovo.id;

            const pacienteNovo = await PacienteService.cadastrarPaciente(endereco_id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar);

            const pacienteCompleto = await PacienteService.pacienteCompleto(pacienteNovo.id);

            return res.status(201).json(pacienteCompleto);

        } catch (error) {
            console.log(error)
            res.status(500).json("Ocorreu um erro ao cadastrar o paciente.")
        }
    },

    async mostrar(req,res){
        try{
            const { id } = req.params;
            const mostrarPaciente = await PacienteService.encontrarPaciente(id);

            if(!mostrarPaciente){
                return res.status(404).json("Paciente não encontrado.")
            }

            const enderecoSendoExibido = await EnderecoController.mostrar(mostrarPaciente.endereco_id);
            
            if(enderecoSendoExibido === false){
                return res.status(404).json("Endereço não encontrado.")
            }

            const pacienteCompleto = await PacienteService.pacienteCompleto(id);

            return res.status(200).json(pacienteCompleto);
            
        } catch (error){
            res.status(500).json("Ocorreu um erro ao procurar o paciente.")
        }
    },

    async atualizar(req,res){
        try{
            const { id } = req.params;

            const { nome, cpf, data_nascimento, email, telefone, observacoes, avatar, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            
            const mostrarPaciente = await PacienteService.encontrarPaciente(id);

            if(mostrarPaciente === false) {
                return res.status(404).json("Paciente não encontrado.")
            }
            
            const endereco_id = mostrarPaciente.endereco_id;

            const enderecoAtualizado = await EnderecoController.atualizar(endereco_id, rua, numero, bairro, cep, complemento, cidade, estado);

            const pacienteAtualizado = await PacienteService.atualizarPaciente(id, nome, cpf, data_nascimento, email, telefone, observacoes, avatar);

            const pacienteCompleto = await PacienteService.pacienteCompleto(id);

            return res.status(200).json(pacienteCompleto);
            
        } catch (error){
            res.status(500).json("Ocorreu um erro ao atualizar o paciente.")
        }
    },

    async desativar(req,res){
        try{
            const { id } = req.params;
            const pacienteExiste = await PacienteService.encontrarPaciente(id);

            if(pacienteExiste === false) {
                return res.status(404).json("Paciente não encontrado.")
            }
            
            // const endereco_id = pacienteExiste.endereco_id;

            // await EnderecoController.desativar(endereco_id);

            const pacienteDesativado = await PacienteService.desativarPaciente(id);
            
            if(pacienteDesativado === false) {
                return res.status(404).json("Não foi possível desativar o paciente.")
            }

            return res.status(200).json("Paciente desativado!");
                   
        } catch (error){
            res.status(500).json("Ocorreu um erro ao deletar o paciente.")
        }
    }
}

module.exports = PacienteController;
