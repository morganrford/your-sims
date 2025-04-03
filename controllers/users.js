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

module.exports = router;