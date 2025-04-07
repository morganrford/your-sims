const express = require("express");
const router = express.Router();

const User = require("../models/schema.js");

router.get("/", async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.render("users/index.ejs", {
    users: users,
  });
});

router.get("/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    res.render("users/profile.ejs", {
      sims: currentUser.sims,
      user: currentUser,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:userId/:simId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const sim = user.sims.find(
      (sim) => sim._id.toString() === req.params.simId
    );
    res.render(`users/simsShow.ejs`, { user, sim });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
