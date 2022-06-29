'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("enderecos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rua: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cep: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      estado: {
          type: Sequelize.STRING(45),
          allowNull: false,
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      },
      alteradoEm: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("enderecos");
  }
};
