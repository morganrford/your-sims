//Dependancy imports
const express = require('express');
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 4000
const Sim = require('./models/sim');
const req = require('express/lib/request');

const isSignedIn = require('./middleware/is-signed-in.js');
const authController = require('./controllers/auth.js');
const foodsController = require('./controllers/food.js');
const passUserToView = require('./middleware/pass-user-to-view.js');
const usersController = require('./controllers/users.js')

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

//Database connection
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=> {
    console.log('connected to mongodb')
}) 

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

//ROUTES

//I.N.D.U.C.E.S.

//Home

//Index

//New

//Delete

//Update

//Create

//Edit

//Show

//Port
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });