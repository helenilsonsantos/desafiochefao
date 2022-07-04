const Usuarios = require ('../models/Usuarios')
const Empresas = require ('../../empresas/models/Empresas')

Usuarios.hasMany (
    Empresas, {
        foreignkey: 'empresa_id'
    }
)

Empresas.hasMany (
    Usuarios, {
        foreignkey: 'empresa_id'
    }
)

module.exports = {
    Usuarios,
    Empresas
}