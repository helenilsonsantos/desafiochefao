'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("pacientes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      endereco_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "enderecos",
          key: "id"
        }
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: "empresas",
            key: 'id'
        }
      },
      nome: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
      },
      email: {
        type: Sequelize.STRING(45),
      },
      telefone: {
        type: Sequelize.STRING(45),
      },
      observacoes: {
          type: Sequelize.STRING(300),
      },
      situacao: {
          type: Sequelize.ENUM('ativo', 'inativo'),
          allowNull: false,
          defaultValue: 'ativo'
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
    await queryInterface.dropTable("pacientes");
  }
};
