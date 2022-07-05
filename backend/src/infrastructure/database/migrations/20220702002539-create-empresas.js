'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      cnpj: {
        type: Sequelize.STRING(20),
        unique: true,
      },
      logo: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      situacao: {
        type: Sequelize.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'ativo',
      },
      criadoEm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      alteradoEm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas');
  },
};
