const Ingredient = require('../models/ingredient')

exports.post = async (req, res) => {
  try {
    const ingredient = new Ingredient({
      name: req.query.name
    })
    await ingredient.save()
    res.status(200).send({ingredient, message: "Ingredient created"})
  } catch (e) {
    return res.status(404).send(e)
  }
}

exports.getAll = async (req, res) => {
  try{
    const ingredients = await Ingredient.find({})
    res.status(200).send(ingredients)
  } catch(e){
    return res.status(404).send(e)
  }
}

exports.get = async (req, res) => {
  try {
    const ingredient =  await Ingredient.findById(req.params.id)
    res.status(200).send(ingredient)
  } catch (e) {
    return res.status(404).send(e)
  }
}

exports.delete = async (req, res) => {
  try {
    const ingredient = await Ingredient.findOneAndDelete({_id: req.params.id})
    res.status(200).send({ingredient, message: "The ingredient was deleted"})
  } catch (e) {
    return res.status(400).send(e)
  }
}