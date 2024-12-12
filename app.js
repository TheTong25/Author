const express = require('express')
const cors = require('cors')
const { authorRouter } = require('./router/authorRouter')

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
  }))

app.use(express.json())
app.use(express.urlencoded({extended :  true}))

authorRouter(app)

module.exports = {app}