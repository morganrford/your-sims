//Dependancy imports
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
// const Sim = require('./models/schema');
// const req = require('express/lib/request');
const session = require("express-session");
const User = require("./models/schema.js");

const isSignedIn = require("./middleware/is-signed-in.js");
const authController = require("./controllers/auth.js");
const simsController = require("./controllers/sims.js");
const passUserToView = require("./middleware/pass-user-to-view.js");
const usersController = require("./controllers/users.js");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//Database connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(passUserToView);
app.use("/auth", authController);
app.use(isSignedIn);

//ROUTES

//Home

app.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index.ejs", {
    user: req.session.user,
    users: users,
  });
});

app.use("/users/:userId/sims", simsController);
app.use("/users", usersController);

//Port
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
