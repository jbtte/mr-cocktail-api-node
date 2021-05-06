const express = require('express')
require('./db/mongoose')
const router = express.Router()

const cocktailRouter = require('./routers/router')

const app = express()
const port = process.env.PORT

app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)
app.use(cocktailRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})