const PacienteService = require("../services/pacienteService");
const EnderecoController = require("../../enderecos/controllers/enderecoController");
const db = require("../../../infrastructure/database/dbConexao");

const PacienteController = {

    async cadastrar(req,res){
        const transaction = await db.transaction();

        try{
            const { nome, cpf, data_nascimento, email, telefone, observacoes, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            const pacienteExiste = await PacienteService.pacienteExiste(cpf);

            if (pacienteExiste !== 0){
                return res.status(400).json("CPF já cadastrado!")
            }

            const { id:endereco_id } = await EnderecoController.cadastrar({rua, numero, bairro, cep, complemento, cidade, estado}, transaction);

            const pacienteNovo = await PacienteService.cadastrarPaciente({endereco_id, nome, cpf, data_nascimento, email, telefone, observacoes}, transaction);

            await transaction.commit();

            const pacienteCompleto = await PacienteService.pacienteCompleto(pacienteNovo.id);

            return res.status(201).json(pacienteCompleto);

        } catch (error) {
            console.log(error);

            await transaction.rollback(); 

            res.status(500).json("Ocorreu um erro ao cadastrar o paciente.");
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
            console.log(error);
            
            res.status(500).json("Ocorreu um erro ao procurar o paciente.")
        }
    },

    async atualizar(req,res){
        const transaction = await db.transaction();

        try{
            const { id } = req.params;

            const { nome, cpf, data_nascimento, email, telefone, observacoes, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            
            const mostrarPaciente = await PacienteService.encontrarPaciente(id);

            if(mostrarPaciente === false) {
                return res.status(404).json("Paciente não encontrado.")
            }
            
            const endereco_id = mostrarPaciente.endereco_id;

            await EnderecoController.atualizar({endereco_id, rua, numero, bairro, cep, complemento, cidade, estado}, transaction);

            await PacienteService.atualizarPaciente({id, nome, cpf, data_nascimento, email, telefone, observacoes}, transaction);

            await transaction.commit();

            const pacienteCompleto = await PacienteService.pacienteCompleto(id);

            return res.status(200).json(pacienteCompleto);
            
        } catch (error){
            console.log(error);
            
            await transaction.rollback(); 

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
            console.log(error);

            res.status(500).json("Ocorreu um erro ao deletar o paciente.")
        }
    }
}

module.exports = PacienteController;
