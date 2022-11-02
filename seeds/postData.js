const {Post} = require('../models');

const postData=[
    {
      title: "Why MVC is so important",
      content: `MVC allows developers to maintain a true separation of concerns, devising their code between 
      the Model layer for data, the View layer for design, and the Controller layer for application logic.`,
      user_id: 1,
    },
    {
      title: "Authentication vs.Authorization",
      content: `MVC allows developers to maintain a true separation of concerns, devising their code between 
      the Model layer for data, the View layer for design, and the Controller layer for application logic.`,
      user_id: 2,
    }
]
const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;