const express = require('express')
const router = express.Router()
const cocktailController = require("../controllers/cocktailController")
const ingredientController = require("../controllers/ingredientController")
const doseController = require("../controllers/doseController")
const { upload } = require('../middleware/image')

// Cocktails routes
router.post('/cocktails', cocktailController.post)
router.get('/cocktails', cocktailController.get)
router.get('/cocktails/:id', cocktailController.getById)
router.delete('/cocktails/:id', cocktailController.delete)
router.post('/cocktails/:id/image', upload.single('image'), cocktailController.image)
router.delete('/cocktails/:id/image', cocktailController.deleteImage)

// Ingredient routes
router.post('/ingredients', ingredientController.post)
router.get('/ingredients/:id', ingredientController.get)
router.get('/ingredients', ingredientController.getAll)
router.delete('/ingredients/:id', ingredientController.delete)

// Doses routes
router.post('/doses', doseController.post)
router.delete('/doses/:id', doseController.delete)


module.exports = router;