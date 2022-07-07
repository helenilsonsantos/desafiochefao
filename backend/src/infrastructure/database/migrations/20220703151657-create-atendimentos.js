'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        paciente_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'pacientes',
            key: "id"
          }
        },
        dentista_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
              model: 'usuarios',
              key: "id"
            }
        },
        descricao: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        data: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        horario: {
          type: Sequelize.STRING(5),
          allowNull: false,
        },
        anexo: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        situacao: {
          type: Sequelize.ENUM('ativo', 'inativo'),
          allowNull: false,
          defaultValue: 'ativo'
        },
        anotacoes: {
          type: Sequelize.STRING(1000),
          allowNull: true,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos');
  },
};
