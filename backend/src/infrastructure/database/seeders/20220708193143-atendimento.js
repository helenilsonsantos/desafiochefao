'use strict';

const { faker } = require('@faker-js/faker');

let atendimento = [];

for (let i = 0; i < 10; i++) {
  atendimento.push({
    paciente_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
    dentista_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
    descricao: faker.lorem.sentence(4),
    data: faker.date.soon(),
    horario: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    anexo: faker.system.commonFileExt(),
    situacao: 'ativo',
    anotacoes: faker.lorem.sentence(8),
    criadoEm: new Date(),
    alteradoEm: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('atendimentos', atendimento, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atendimentos', null, {});
  },
};
