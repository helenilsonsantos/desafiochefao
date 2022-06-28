'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("pacientes", {
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
          model: "Enderecos",
          key: "id"
        }
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      observacoes: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      avatar: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      situacao: {
          type: DataTypes.STRING,
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("pacientes");
  }
};
