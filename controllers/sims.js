const express = require("express");
const router = express.Router();

const User = require("../models/schema.js");
const req = require("express/lib/request.js");

//Routes

//Index

router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("sims/index.ejs", {
      sims: currentUser.sims,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//New

router.get("/new", (req, res) => {
  res.render("sims/new.ejs");
});

//Delete

router.delete("/:simId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.sims.id(req.params.simId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/sims`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//Update

router.put("/:simId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sim = currentUser.sims.id(req.params.simId);
    sim.set(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/sims/${req.params.simId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//Create

router.post("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    console.log(currentUser);
    currentUser.sims.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/sims`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//Edit

router.get("/:simId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sim = currentUser.sims.id(req.params.simId);
    res.render("sims/edit.ejs", {
      sim: sim,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//Show

router.get("/:simId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const sim = currentUser.sims.id(req.params.simId);
    res.render("sims/show.ejs", {
      sim: sim,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
