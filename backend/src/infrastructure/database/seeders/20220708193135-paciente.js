'use strict';

const { faker } = require('@faker-js/faker');

let paciente = [];

for (let i = 0; i < 10; i++) {
  paciente.push({
    endereco_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
    empresa_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
    nome: faker.name.findName(),
    cpf: faker.phone.number('### ### ### ##'),
    data_nascimento: faker.date.birthdate(),
    email: faker.internet.email(),
    telefone: faker.phone.number('+55 11 #### ####'),
    observacoes: faker.lorem.sentence(8),
    situacao: 'ativo',
    criadoEm: new Date(),
    alteradoEm: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pacientes', paciente, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pacientes', null, {});
  },
};
