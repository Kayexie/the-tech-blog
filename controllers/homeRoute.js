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
        res.render('homepage', {posts, loggedIn: req.session.loggedIn})
    } catch(err) {
        res.status(500).json(err)
    }
});

//create router for specific post;
router.get('/post/:id', async(req, res)=>{
    try{
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include:[
                { model: User, attributes: ['username']},
                { model: Comment, attributes: ['content']}
            ]
        });
        const posts = postData.get({plain: true});
        console.log(posts)
        res.render('comment', {posts, loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
})

//create router for login in 
router.get('/login', (req, res)=> {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
})

module.exports = router;

//create a user page to create new post and manage their post(update/delete)