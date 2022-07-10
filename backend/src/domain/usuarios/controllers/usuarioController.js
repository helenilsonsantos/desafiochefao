const cloudinary = require ('../../../configs/cloudinary');
const bcrypt = require("bcryptjs");
const fs = require ('fs');
const db = require("../../../infrastructure/database/dbConexao");
const UsuarioService = require('../services/usuarioService');
const EmpresaController = require('../../empresas/controller/empresaController');
const EmpresaService = require('../../empresas/services/empresaService');
const { usuarioCompleto } = require('../services/usuarioService');

const UsuarioController = {
    
    async cadastrarUsuarioAdministrador (req, res) {
        const transaction = await db.transaction();

        try {
            const { nome_empresa, cnpj, logo, nome_completo, telefone, email, senha } = req.body;
            const usuarioExiste = await UsuarioService.usuarioExistePorEmail(email);
            const empresaExiste = await EmpresaService.empresaExiste(cnpj);

            if (usuarioExiste !== 0){
                return res.status(400).json("Erro: email já cadastrado.");
            }

            if (empresaExiste !== 0){
                return res.status(400).json("Erro: CNPJ já cadastrado.");
            }

            var avatar = req.files && req.files[0];
            if(avatar) {
                const uploadPath = await cloudinary.uploads(avatar.path, 'avatar');
                fs.unlinkSync(avatar.path);
                avatar = uploadPath.url;

            } else {
                avatar = "";

            }

            const novaSenha = bcrypt.hashSync(senha, 10);

            const { id:empresa_id } = await EmpresaController.cadastrarEmpresa({ nome_empresa, cnpj, logo }, transaction);

            const usuarioNovo = await UsuarioService.cadastrarUsuario({ empresa_id, nome_completo, telefone, email, perfil: "administrador", senha: novaSenha, avatar }, transaction);
    
            await transaction.commit();

            const usuarioCompleto = await UsuarioService.usuarioCompleto(usuarioNovo.id);

            return res.status(201).json(usuarioCompleto);

        } catch (error) {
            console.log(error);

            await transaction.rollback(); 

            return res.status(500).json("Ocorreu um erro ao cadastrar o usuário ou a empresa.");
        }
    },

    async cadastrarUsuarioEquipe (req, res) {
        try {

            const { empresa_id, nome_completo, telefone, email, perfil = 'secretaria', senha } = req.body;
            const usuarioExiste = await UsuarioService.usuarioExistePorEmail(email);

            if (usuarioExiste !== 0){
                return res.status(400).json("Erro: email já cadastrado.");
            }

            var avatar = req.files && req.files[0];
            if(avatar) {
                const uploadPath = await cloudinary.uploads(avatar.path, 'avatar');
                fs.unlinkSync(avatar.path);
                avatar = uploadPath.url;

            } else {
                avatar = "";

            }

            const novaSenha = bcrypt.hashSync(senha, 10);

            const usuarioNovo = await UsuarioService.cadastrarUsuario({ empresa_id, nome_completo, telefone, email, perfil, senha: novaSenha, avatar });

            const usuarioCompleto = await UsuarioService.usuarioCompleto(usuarioNovo.id);

            return res.status(201).json (usuarioCompleto);

        } catch (error) {
            console.log(error);
            return res.status(500).json("Ocorreu um erro ao cadastrar o usuário.");
        }
    },

    async mostrarUsuarioPorId (req, res) {
        try {
            const { idUsuario } = req.params;
            const mostrarUsuario = await UsuarioService.usuarioCompleto(idUsuario);

            if (!mostrarUsuario){
                return res.status(400).json("Erro: usuário não encontrado.");
            }
            
            return res.status(200).json(mostrarUsuario);

        } catch (error) {
            console.log(error);
            return res.status(500).json("Ocorreu um erro ao recuperar informações do usuário.");
        }

    },

    async mostrarUsuariosDeEmpresa (req, res) {
        try {
            const { idEmpresa } = req.params;

            const usuariosDaEmpresa = await UsuarioService.encontrarUsuariosDeEmpresa(idEmpresa);

            return res.status(200).json(usuariosDaEmpresa);

        } catch (error) {
            console.log(error);
            return res.status(500).json("Ocorreu um erro ao recuperar os usuários da empresa.");
        }

    },

    async atualizarUsuario (req, res) {
        try {
            const { idUsuario } = req.params;
            const { nome_completo, telefone, email, perfil, senha } = req.body;

            const usuarioExiste = await UsuarioService.usuarioExistePorId(idUsuario);

            if (usuarioExiste === 0){
                return res.status(400).json("Erro: usuário não encontrado.");
            }
            
            var avatar = req.files[0];

            if(avatar) {
                const uploadPath = await cloudinary.uploads(avatar.path, 'avatar');
                fs.unlinkSync(avatar.path);
                avatar = uploadPath.url;

            } else {
                avatar = "";

            }
            
            var usuarioCompleto = "";

            if(senha){
                const novaSenha = bcrypt.hashSync(senha, 10);
                usuarioCompleto = await UsuarioService.atualizarUsuario({ idUsuario, nome_completo, telefone, email, perfil, senha: novaSenha, avatar });

            } else {
                usuarioCompleto = await UsuarioService.atualizarUsuario({ idUsuario, nome_completo, telefone, email, perfil, avatar });
                return res.status(200).json(usuarioCompleto);
            }

            return res.status(200).json(usuarioCompleto);

        } catch (error) {
            console.log(error);
            return res.status(500).json("Ocorreu um erro ao atualizar o usuário.");
        }
    },

    async desativarUsuario (req, res) {
        try {
            const { idUsuario } = req.params
            const usuarioExiste = await UsuarioService.usuarioExistePorId(idUsuario);

            if (usuarioExiste === 0){
                return res.status(400).json("Erro: usuário não encontrado.");
            }

            await UsuarioService.desativarUsuario(idUsuario);

            return res.status(200).json("Usuário excluído!");

        } catch (error) {
            console.log(error);
            return res.status(500).json("Ocorreu um erro ao desativar o usuário.");
        }
    }
}

module.exports = UsuarioController;