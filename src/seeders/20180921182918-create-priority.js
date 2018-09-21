'use strict';
const {Priority} = require('../models')
module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return Priority.bulkCreate([
      { name: "Critical"},
      { name: "High"},
      { name: "Low"},
      { name: "Later"},
    ]).then(priorities => {
      console.log('created');
    })

    },

    down: (queryInterface, Sequelize) => {
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    }
  };
