const { Usuarios } = require ("../models")
const cloudinary = require ('../../../configs/cloudinary')
const bcrypt = require("bcryptjs")
const fs = require ('fs')

const usuarioController = {
    async cadastrarUsuario (req, res) {

        try {

            console.log(req.auth)
            const { empresa_id, nome_completo, telefone, email, perfil, senha} = req.body

            const avatar = req.files[0]
            const uploadPath = await cloudinary.uploads(avatar.path, 'avatar')
            fs.unlinkSync (avatar.path)

            const novaSenha = bcrypt.hashSync(senha, 10)

            const novoUsuario = await Usuarios.create ({
                empresa_id,
                nome_completo,
                telefone,
                email,
                perfil,
                senha: novaSenha,
                avatar: uploadPath.url
            }) 
    
            res.json (novoUsuario)

        } catch (error) {
            console.log(error)
            return res.json('Falha ao Cadastrar os Dados')
        }
    },

    async listadeUsuarios (req, res) {

        try {
            console.log(req.auth)

            const listaResposta = await Usuarios.findAll({
                attributes: ['id', 'empresa_id', 'nome_completo', 'telefone', 'email', 'perfil', 'situacao', 'avatar']
            })

            res.json(listaResposta)

        } catch (error) {
            console.log(error)
            return res.json('Falha ao Recuperar os Dados')
        }

    },

    async atualizarUsuario (req, res) {
       
        try {
            console.log(req.auth)

            const { idUsuario } = req.params

            const { empresa_id, nome_completo, telefone, email, perfil, senha, situacao } = req.body

            const avatar = req.files[0]
            const uploadPath = await cloudinary.uploads(avatar.path, 'avatar')
            fs.unlinkSync (avatar.path)

            const novaSenha = bcrypt.hashSync(senha, 10)

            const usuarioAtualizado = await Usuarios.update (
                { empresa_id, nome_completo, telefone, email, perfil, senha: novaSenha, situacao, avatar: uploadPath.url},
                {
                    where: {
                        id: idUsuario
                    }
                }
            ) 

            res.json('Comentário Atualizado com Sucesso')

        } catch (error) {
            console.log(error)
            return res.json('Falha ao Atualizar os Dados')
        }
    },

    async desativarUsuario (req, res) {
        try {
            console.log(req.auth)

            const { idUsuario } = req.params
            const { situacao = 'inativo'} = req.body

            const inativarUsuario = await Usuarios.update(
                {situacao},
                {
                    where: {
                        id: idUsuario
                    }
                })

            res.json('Usuário inativado com sucesso')

        } catch (error) {
            console.log(error)
            return res.json('Falha ao inativar o usuário')
        }
    }
}

module.exports = usuarioController