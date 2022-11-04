const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');


//get all the comments
router.get('/', async(req, res)=> {
    try{
        const allComment = await Comment.findAll();
        res.status(200).json(allComment);
    }catch(err){
        res.status(500).json(err)
    }
})

//create new comments
router.post('/', async(req, res)=> {
    try{
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;