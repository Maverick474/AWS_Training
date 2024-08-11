const express = require('express')
const router = require('./routes/routes')
const mongoose = require('mongoose')
const {logReqRes} = require('./middleware')

const app = express()

app.use(express.json())

app.use('/api/users', router)
app.use(logReqRes('log.txt'))

app.listen(5000)

mongoose.connect('mongodb://localhost:27017/myDB')
.then(()=>console.log("Database connected!"))
.catch((error)=>console.log("Error", error))