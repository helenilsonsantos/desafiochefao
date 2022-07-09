const { Usuarios } = require("../models");
const { Empresas } = require("../../empresas/models");

const UsuarioService = {

    async cadastrarUsuario({ empresa_id, nome_completo, telefone, email, perfil, senha, avatar }, transaction){
        const novoUsuario = await Usuarios.create({
            empresa_id, 
            nome_completo, 
            telefone, 
            email, 
            perfil, 
            senha, 
            avatar
        }, {transaction});
        
        return novoUsuario;
    },

    async usuarioExistePorEmail(email){
        const buscaUsuario = await Usuarios.count({
            where: {
              email
            }
        });
    
        return buscaUsuario;
    },

    async usuarioExistePorId(idUsuario){
        const buscaUsuario = await Usuarios.count({
            where: {
              id: idUsuario
            }
        });
    
        return buscaUsuario;
    },

    async encontrarUsuariosDeEmpresa(idEmpresa){
        const encontrarUsuario = await Usuarios.findAll({
            where: {
                empresa_id: idEmpresa
            },
            attributes: {
                exclude: ['senha']
            },
        });
        
        return encontrarUsuario;
    },

    async usuarioCompleto(idUsuario){
        const usuarioCompleto = await Usuarios.findAll({
            where: {
                id: idUsuario
            },
            include: [{
                model: Empresas
            }]
        });
        
        return usuarioCompleto;
    },

    async atualizarUsuario({ idUsuario, nome_completo, telefone, email, perfil, senha, avatar }) {
        await Usuarios.update(
            {
                nome_completo, 
                telefone, 
                email, 
                perfil, 
                senha, 
                avatar
            },
            {
                where: {
                    id: idUsuario
                }
            });

        const usuarioAtualizado = UsuarioService.usuarioCompleto(idUsuario);

        return usuarioAtualizado;
    },

    async desativarUsuario(idUsuario) {
        const usuarioDesativado = await Usuarios.update(
            {
                situacao: "inativo"
            },
            {
                where: {
                    id: idUsuario
                },
            }
        );

        return usuarioDesativado;
    }

}

module.exports = UsuarioService;