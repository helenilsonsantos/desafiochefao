const db = require("../../../infrastructure/database/dbConexao");
const { DataTypes, Sequelize } = require("sequelize");
const { Enderecos } = require("../../pacientes/models/Pacientes");


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
          model: Usuario,
          key: "id"
        }
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    anexos: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    situacao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    anotacoes: {
      type: DataTypes.STRING(300),
      allowNull: false,
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