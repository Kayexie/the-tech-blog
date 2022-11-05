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

//delet post
router.delete('/:id', withAuth, async(req, res) => {
    try{
        const deletePost = await Post.destroy({
            where:{
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!deletePost) {
            res.status(404).json({ message: 'No recipe found with that id!' });
            return;
          }
      
          res.status(200).json(deletePost);
    }catch (err) {
        res.status(500).json(err);
      }
});

//update post
router.put('/:id', withAuth, async (req, res) => {
    try{
    const updatePost = await Post.update({
        title: req.body.title,
        content: req.body.content
    },
    {
        where: {
            id: req.params.id
        }
    });
    if (!updatePost) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
      res.status(200).json(updatePost);
     } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;