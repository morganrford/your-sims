const express = require("express");
const router = express.Router();

const User = require("../models/schema.js");

router.get('/', async (req, res) => {
    const users = await User.find({})
    console.log(users)
  res.render('users/index.ejs', {
    users : users
  });
});


router.get('/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    res.render('./views/users/index.ejs', { sims: currentUser.sim, user: currentUser})
  } catch (error) {
    console.log(error)
    res.redirect('/')
  } 
})

module.exports = router;