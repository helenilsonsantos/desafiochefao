const db = require('../../../infrastructure/database/dbConexao');
const { DataTypes } = require('sequelize');

const Empresas = db.define(
  'Empresas',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_empresa: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
    logo: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    situacao: {
      type: DataTypes.ENUM('ativo', 'inativo'),
      allowNull: false,
      defaultValue: 'ativo',
    },
    criadoEm: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alteradoEm: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'empresas',
    createdAt: 'criadoEm',
    updatedAt: 'alteradoEm',
    timestamps: true,
  }
);

module.exports = Empresas;
