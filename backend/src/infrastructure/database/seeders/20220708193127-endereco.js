'use strict';

const { faker } = require('@faker-js/faker');

let endereco = [];

for (let i = 0; i < 10; i++) {
  endereco.push({
    rua: faker.address.street(),
    numero: faker.address.buildingNumber(),
    bairro: faker.address.county(),
    cep: faker.address.zipCode('#########'),
    complemento: faker.address.secondaryAddress(),
    cidade: faker.address.city(),
    estado: faker.address.state(),
    criadoEm: new Date(),
    alteradoEm: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('enderecos', endereco, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enderecos', null, {});
  },
};
