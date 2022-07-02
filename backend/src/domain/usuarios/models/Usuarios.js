const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");
const { Empresas } = require("../../empresas/models");

const Usuarios = db.define(
  "Usuarios",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Empresa,
            key: 'id'
        }
    },
    nome_completo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(19)
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    perfil: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    situacao: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING(100)
    },
    criadoEm: {
      allowNull: false,
      type: DataTypes.DATE
    },
    alteradoEm: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "enderecos",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Usuarios;