const Usuarios = require ('../models/Usuarios')
const Empresas = require ('../../empresas/models/Empresas')

Usuarios.belongsTo (
    Empresas, {
        foreignkey: 'empresa_id'
    }
)

module.exports = {
    Usuarios
}