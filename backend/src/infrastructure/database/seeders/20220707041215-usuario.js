'use strict';

const { faker } = require('@faker-js/faker');

let usuario = [];

for (let i = 0; i < 5; i++) {
  usuario.push({
    empresa_id: 115,
    nome_completo: faker.name.findName(),
    telefone: faker.phone.number('+55 11 #### ####'),
    email: faker.internet.email(),
    perfil: faker.name.jobType(),
    senha: faker.random.alpha(10),
    situacao: 'ativo',
    avatar: faker.image.avatar(),
    criadoEm: new Date(),
    alteradoEm: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', usuario, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
