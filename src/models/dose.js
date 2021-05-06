const mongoose = require('mongoose')
const validator = require('validator')

const doseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  cocktail: {
    type: mongoose.Types.ObjectId,
    ref: "Cocktail",
    required: true
  }, 
  ingredient: {
    type: mongoose.Types.ObjectId,
    ref: "Ingredient",
    required: true
  }, 
}, {
  timestamps: true
})

doseSchema.methods.toJSON = function () {
  const dose = this
  const doseObject = dose.toObject()

  
  
  return doseObject
}

const Dose = mongoose.model('Dose',  doseSchema)

module.exports = Dose

