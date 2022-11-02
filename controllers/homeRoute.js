const router = require('express').Router();
const {User, Post, Comment} = require ('../models');
const withAuth = require('../utils/auth');

//create router to retrieve all the post from database;
router.get('/', async(req, res) => {
    try{
        const postData = await Post.findAll({
            include:[
                {
                    model: User,
                    attributes: ['username'],
                },
            ]
        });
        const posts = postData.map((data)=>data.get({plain: true}));
        res.render('homepage', {posts, logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err)
    }
});

//create router for specific post;
router.get('/posts/:id', async(req, res)=>{
    try{
        const postData = await Post.findByPk({
            includes:[
                { model: User, attributes: ['username']},
                { model: Comment, attributes: ['content']}
            ]
        });
        const posts = postData.get({plain: true});
        res.render('comment', {
            ...posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;