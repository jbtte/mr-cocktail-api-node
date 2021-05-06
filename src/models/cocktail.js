const mongoose = require('mongoose')
const validator = require('validator')
const Dose = require('./dose')

const cocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: Buffer
  },
  doses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dose"
  }] 
}, {
  timestamps: true
})

const Cocktail = mongoose.model('Cocktail',  cocktailSchema)

module.exports = Cocktail