const {Comment} = require('../models');

const commentData=[
    {
      content: `I agree with you`,
      user_id: 2,
      post_id: 1,
    },
    {
      content: `Not very useful`,
      user_id: 1,
      post_id: 1,
    },
    {
      content: `This is very useful`,
      user_id: 1,
      post_id: 2,
    },
]
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;