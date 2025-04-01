const mongoose = require('mongoose')

const simSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    lifeStage: {
        type: String,
        required: true,
    },
    occult: {
        type: String,
        required: true,
    },
    world: {
        type: String,
        required: false,
    },
    career: {
        type: String,
        required: true,
    },
    personalityTraits: {
        type: String,
        required: false,
    },
    aspiration: {
        type: String,
        required: false,
    },
    partner: {
        type: String,
        required: false,
    },
    fashionStyle: {
        type: String,
        required: false,
    },
    comments: {
        type: String,
        required: false,
    },
})

const Sim = mongoose.model('Sim', simSchema)
module.exports = Sim

const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    sims: [simSchema],
  });
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User
  