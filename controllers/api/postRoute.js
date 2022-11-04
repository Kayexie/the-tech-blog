const router = require('express').Router();
const {Post, User} = require('../../models');
const withAuth = require('../../utils/auth');

//create post 

router.post('/', withAuth, async(req, res) => {
    console.log(req)
    try{
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        console.log(newPost)
        res.status(200).json(newPost);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;