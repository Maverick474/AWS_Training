
const http = require('http')
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    return res.send('Hello from my page')
})

app.get('/about', (req, res)=>{
    return res.send(`Hello ${req.query.name}`)
})

app.listen(8000, ()=> console.log('server has started'))

/*
for express we donot need to write this much lines of codes
inorder to create a port and than listen on it

const server = http.createServer(app)

server.listen(8000)

*/