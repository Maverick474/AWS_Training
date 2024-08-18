const express = require('express')
const feedRoutes = require('./routes/feed')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) // best to use this middle ware for parsing json data
// always place this middleware above the routes 

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/feed', feedRoutes)

app.listen(8080)