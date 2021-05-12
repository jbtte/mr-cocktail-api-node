const express = require('express')
require('./db/mongoose')
var cors = require('cors')

const router = express.Router()

const cocktailRouter = require('./routers/router')

const app = express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use(cocktailRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})