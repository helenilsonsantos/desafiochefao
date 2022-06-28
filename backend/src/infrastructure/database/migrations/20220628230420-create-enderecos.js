'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("enderecos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      complemento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
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
    await queryInterface.dropTable("enderecos");
  }
};
