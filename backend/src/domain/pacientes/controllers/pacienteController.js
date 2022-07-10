const PacienteService = require("../services/pacienteService");
const EnderecoController = require("../../enderecos/controllers/enderecoController");
const db = require("../../../infrastructure/database/dbConexao");

const PacienteController = {

    async cadastrarPaciente(req,res){
        const transaction = await db.transaction();

        try{
            const { nome, cpf, data_nascimento, email, telefone, observacoes, empresa_id, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            const pacienteExiste = await PacienteService.pacienteExiste(cpf);

            if (pacienteExiste !== 0){
                return res.status(400).json("Erro: CPF já cadastrado.")
            }

            const { id: endereco_id } = await EnderecoController.cadastrarEndereco({ rua, numero, bairro, cep, complemento, cidade, estado }, transaction);

            const pacienteNovo = await PacienteService.cadastrarPaciente({ endereco_id, empresa_id, nome, cpf, data_nascimento, email, telefone, observacoes }, transaction);

            await transaction.commit();

            const pacienteCompleto = await PacienteService.pacienteCompleto(pacienteNovo.id);

            return res.status(201).json(pacienteCompleto);

        } catch (error) {
            console.log(error);

            await transaction.rollback(); 

            res.status(500).json("Ocorreu um erro ao cadastrar o paciente.");
        }
    },

    async mostrarPacientePorId(req,res){
        try{
            const { idPaciente } = req.params;
            const mostrarPaciente = await PacienteService.encontrarPacientePorId(idPaciente);

            if(!mostrarPaciente){
                return res.status(404).json("Erro: paciente não encontrado.")
            }

            return res.status(200).json(mostrarPaciente);
            
        } catch (error){
            console.log(error);
            res.status(500).json("Ocorreu um erro ao recuperar informações do paciente.")
        }
    },

    async mostrarPacientesDeEmpresa(req,res){
        try{
            const { idEmpresa } = req.params;

            const listaDePacientes = await PacienteService.listarPacientesDeEmpresa(idEmpresa);

            return res.status(200).json(listaDePacientes);
            
        } catch (error){
            console.log(error);
            res.status(500).json("Ocorreu um erro ao recuperar os pacientes da empresa.")
        }
    },

    async atualizarPaciente(req,res){
        const transaction = await db.transaction();

        try{
            const { idPaciente } = req.params;
            const { nome, cpf, data_nascimento, email, telefone, observacoes, rua, numero, bairro, cep, complemento, cidade, estado } = req.body;
            
            const mostrarPaciente = await PacienteService.encontrarPacientePorId(idPaciente);

            if(!mostrarPaciente) {
                return res.status(404).json("Erro: paciente não encontrado.")
            }
            
            const endereco_id = mostrarPaciente.endereco_id;

            await EnderecoController.atualizarEndereco({ endereco_id, rua, numero, bairro, cep, complemento, cidade, estado }, transaction);

            await PacienteService.atualizarPaciente({ idPaciente, nome, cpf, data_nascimento, email, telefone, observacoes }, transaction);

            await transaction.commit();

            const pacienteCompleto = await PacienteService.pacienteCompleto(idPaciente);

            return res.status(200).json(pacienteCompleto);
            
        } catch (error){
            console.log(error);
            
            await transaction.rollback(); 

            res.status(500).json("Ocorreu um erro ao atualizar o paciente.")
        }
    },

    async desativarPaciente(req,res){
        try{
            const { idPaciente } = req.params;
            const pacienteExiste = await PacienteService.encontrarPacientePorId(idPaciente);

            if(!pacienteExiste) {
                return res.status(404).json("Erro: paciente não encontrado.")
            }
            
            await PacienteService.desativarPaciente(idPaciente);

            return res.status(200).json("Paciente excluído!");
                   
        } catch (error){
            console.log(error);
            res.status(500).json("Ocorreu um erro ao excluir o paciente.")
        }
    }
}

module.exports = PacienteController;
