const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express()
require('dotenv').config()
app.use(bodyParser.json())

app.use('/api', routes)

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

app.use(express.json())

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
