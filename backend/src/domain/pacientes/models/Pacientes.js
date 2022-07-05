const db = require("../../../infrastructure/database/dbConexao");
const { DataTypes, Sequelize } = require("sequelize");
const Enderecos = require("../../enderecos/models/Enderecos");


const Pacientes = db.define(
  "Pacientes",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    endereco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: Enderecos,
        key: "id"
      }
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    situacao: {
      type: Sequelize.ENUM('ativo', 'inativo'),
      allowNull: false,
      defaultValue: 'ativo'
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
    tableName: "pacientes",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Pacientes;

