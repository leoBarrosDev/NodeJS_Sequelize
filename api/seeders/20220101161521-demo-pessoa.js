'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Thais ANdrade',
        email: 'thais@thais.com.br',
        cpf: '123.456.789-00',
        telefone: '(81) 98719-7477',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Clara de Andrade Barros',
        email: 'mclara@mariaclara.com.br',
        cpf: '123.456.789-01',
        telefone: '(81) 98719-7477',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Isabel Barros de Souza',
        email: 'isabel@isabel.com.br',
        cpf: '123.456.789-02',
        telefone: '(81) 3439-4055',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Pessoas', null, {});

  }
};
