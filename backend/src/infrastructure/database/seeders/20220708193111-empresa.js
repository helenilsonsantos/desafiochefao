'use strict';

const { faker } = require('@faker-js/faker');

let empresa = [];

for (let i = 0; i < 10; i++) {
  empresa.push({
    nome_empresa: faker.company.companyName(),
    cnpj: faker.phone.number('## ### ### #### ##'),
    logo: faker.image.abstract(),
    situacao: 'ativo',
    criadoEm: new Date(),
    alteradoEm: new Date(),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empresas', empresa, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('empresas', null, {});
  },
};
