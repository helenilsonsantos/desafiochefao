const db = require('../../../infrastructure/database/dbConexao');
const { DataTypes } = require('sequelize');

const Perfil = db.define(
  'Perfil',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    situacao: {
      type: DataTypes.ENUM('ativo', 'inativo'),
      allowNull: false,
      defaultValue: 'ativo',
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'perfil',
    timestamps: true,
    underscored: true,
  }
);

module.exports = Perfil;
