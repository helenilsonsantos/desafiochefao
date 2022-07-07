const db = require("../../../infrastructure/database/dbConexao");
const { DataTypes, Sequelize } = require("sequelize");
const Enderecos = require("../../enderecos/models/Enderecos");
const Empresas = require("../../empresas/models/Empresas");

const Pacientes = db.define(
  "Pacientes",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    endereco_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: Enderecos,
        key: "id"
      }
    },
    empresa_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
          model: Empresas,
          key: 'id'
      }
    },
    nome: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING(45),
      allowNull: false,
      unique: true
    },
    data_nascimento: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    observacoes: {
      type: Sequelize.STRING(300),
      allowNull: false,
    },
    situacao: {
      type: Sequelize.ENUM('ativo', 'inativo'),
      allowNull: false,
      defaultValue: 'ativo'
    },
    criadoEm: {
      allowNull: false,
      type: Sequelize.DATE
    },
    alteradoEm: {
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
    tableName: "pacientes",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Pacientes;

