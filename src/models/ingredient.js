const mongoose = require('mongoose')
const validator = require('validator')

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
})

ingredientSchema.methods.toJSON = function () {
  const ingredient = this
  const ingredientObject = ingredient.toObject()  
  return ingredientObject
}

const Ingredient = mongoose.model('Ingredient',  ingredientSchema)

module.exports = Ingredient