const db = require("../../../infrastructure/database/dbConexao");
const { DataTypes, Sequelize } = require("sequelize");
const Pacientes = require("../../pacientes/models/Pacientes");
const Usuarios = require("../../usuarios/models/Usuarios");


const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: Pacientes,
        key: "id"
      }
    },
    dentista_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: Usuarios,
          key: "id"
        }
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    anexos: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    situacao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    anotacoes: {
      type: DataTypes.STRING(1000),
      allowNull: true,
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
    tableName: "atendimentos",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Atendimentos;