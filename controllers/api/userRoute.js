const router = require('express').Router();
const { User } = require("../../models");

//route to get all users

router.get('/', async(req, res) => {
  try{
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//create new user
router.post('/', async(req, res) => {
  try{
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(newUser)
    })
} catch(err) {
    console.log(err);
    res.status(500).json(err);
}
});

//login
router.post('/login', async (req, res)=> {
    try{
       const user = await User.findOne ({
        where: {
            email: req.body.email,
        },
       });
       if(!user) {
        res.status(400).json({message: 'Incorrect email or password. Please try again!' });
        return;
       }
       const validPassword = await user.checkPassword(req.body.password);
       if (!validPassword){
        res.status(400).json({message: 'Incorrect email or password. Please try again!' });
        return;
       }
       req.session.save(() => {
        req.session.loggedIn = true;
        res
          .status(200)
          .json({message: 'You are now logged in!' });
      });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);}  
});

//logout
router.post('/logout', (req, res)=>{
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    });
    
module.exports = router;