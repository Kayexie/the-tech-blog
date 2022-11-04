const router = require('express').Router();
const {Post, User} = require('../../models');
const withAuth = require('../../utils/auth');

//create post 

router.post('/', withAuth, async(req, res) => {
    try{
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
        });
        res.status(200).json(newPost);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;