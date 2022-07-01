const db = require('../../../infrastructure/database');
const { DataTypes } = require('sequelize');

const Pagamentos = db.define(
  'pagamento',
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
    observacoes: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'pagamento',
    timestamps: true,
    underscored: true,
  }
);

module.exports = Pagamentos;
