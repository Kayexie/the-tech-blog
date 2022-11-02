const { User } = require('../models');

const userData = [
  {
    username: 'Jasmine',
    email: 'js@gmail.com',
    password: '12345678',
  },
  {
    username: 'Gummy',
    email: 'gummy@123.com',
    password: 'password',
  },
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;