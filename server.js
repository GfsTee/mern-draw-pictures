require('dotenv').config()
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const pictures = require('./routes/pictureRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((response) => {
        app.listen(4554, () => console.log(`http://localhost:4554`))
        console.log("DB connected")
    })
    .catch((error) => console.log(error))


app.use('/api', pictures)


