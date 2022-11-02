const postSeed = require('./postData');
const userSeed = require('./userData');
const commentSeed = require('./commentData');

const sequelize = require('../config/connection');

const seedData = async() => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await userSeed();
  console.log('\n----- USERS -----\n');

  await postSeed();
  console.log('\n----- POSTS -----\n');

  await commentSeed();
  console.log('\n----- COMMENTS -----\n');

  process.exit(0);
}

seedData();