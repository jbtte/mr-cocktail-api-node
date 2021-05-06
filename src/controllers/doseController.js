const Ingredient = require('../models/ingredient')
const Cocktail = require('../models/cocktail')
const Dose = require('../models/dose')


exports.post = async (req, res) => {
  try {
    const dose = new Dose({
      description: req.query.description,
      cocktail: req.query.cocktail,
      ingredient: req.query.ingredient,
    })
    await dose.save()

    const cocktail = await Cocktail.findOne({_id: req.query.cocktail})
    cocktail.doses.push(dose._id)
    await cocktail.save()

    res.status(200).send({dose, message: "Dose created"})
  } catch (e) {
    return res.status(404).send(e)
  }
}

exports.get = async (req, res) => {
  try {
    const dose =  await Dose.findById(req.params.id)
    res.status(200).send(dose)
  } catch (e) {
    return res.status(404).send(e)
  }
}

exports.delete = async (req, res) => {
  try {
    const dose = await Dose.findOneAndDelete({_id: req.params.id})
    res.status(200).send({dose, message: "The dose was deleted"})
  } catch (e) {
    return res.status(400).send(e)
  }
}

