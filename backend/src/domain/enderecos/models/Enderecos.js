const db = require("../../../infrastructure/database/dbConexao");
const { DataTypes } = require("sequelize");

const Enderecos = db.define(
  "Enderecos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    rua: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    cep: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado: {
        type: DataTypes.STRING(45),
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
    tableName: "enderecos",
    createdAt: "criadoEm",
    updatedAt: "alteradoEm",
    timestamps: true,
  }
);

module.exports = Enderecos;

