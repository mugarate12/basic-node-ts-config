'use strict';
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const name = String(process.env.ADMIN_NAME);
    const username = String(process.env.ADMIN_USERNAME);
    const email = String(process.env.ADMIN_EMAIL);
    const password = String(process.env.ADMIN_PASSWORD);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const id = uuidv4();

    await queryInterface.bulkInsert('users', [{
      id,
      
      name,
      email,

      username,
      password: hash,

      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .catch(err => {
        if (err.code && err.sqlMessage) {
          console.error(err.code, err.sqlMessage);
        } else {
          console.error('Erro ao tentar criar o manager inicial');
        }
      });

    await queryInterface.bulkInsert('admins', [{
      id: uuidv4(),
      user_id_FK: id,

      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .catch(err => {
        if (err.code && err.sqlMessage) {
          console.error(err.code, err.sqlMessage);
        } else {
          console.error('Erro ao tentar criar o manager inicial');
        }
      });

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};