const multer = require('multer')
const Cocktail = require('../models/cocktail')
const sharp = require('sharp')


exports.post = async (req, res, next) => {
  try {
    const cocktail = new Cocktail({
      name: req.query.name
    })
    await cocktail.save()
  } catch (e) {
    return res.status(400).send(e)
  }
 
  res.status(201).send(cocktail)
}

exports.get = async (req, res, next) => {
  try {
    const cocktails = await Cocktail.find({})
    res.status(200).send(cocktails)
  } catch (e) {
    return res.status(400).send(e)
  }
}

exports.delete = async (req, res) => {
  try{
    const cocktail = await Cocktail.findOneAndDelete({_id: req.params.id,})
    res.status(204).send(cocktail)
  } catch(e){
    return res.status(400).send(e)
  }
}

exports.getById = async (req, res) => {
  try{
    const cocktail = await Cocktail.findOne({_id: req.params.id})
      .populate({
        path:'doses',
        populate: {
          path: "ingredient"
        }
      })
      .then(cocktail => {
         res.status(200).json(cocktail)
        })
         
  } catch(e){
    return res.status(404).send(e)
  } 
}

exports.image =  async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({width:400, height: 400}).png().toBuffer()
  const cocktail = await Cocktail.findOne({_id: req.params.id})

  try{
  cocktail.image = buffer
  await cocktail.save()
  res.status(201).send({message: "Image uploaded"})
  } catch (error) {
    res.status(400).send({"erro": error.message})
  }
}

exports.deleteImage =  async (req, res) =>{
  const cocktail = await Cocktail.findOne({_id: req.params.id})
  cocktail.image = undefined
  await cocktail.save()
  res.status(204).send()
}
