const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const { type } = require('os')

const app = express()


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
        require: true,
        unique: true
        
    },

    jobTitle: {
        type: String,
    },

    gender: {
        type: String,
    }
}, {timestamps: true})

const user = mongoose.model('user', userSchema)

app.get('/api/users', async (req, res)=>{
    const users = await user.find({})
    res.json(users)
})

app.get('/users', async (req, res)=>{
    const users = await user.find({})
    const html = `
     <ul>
      ${users.map((user)=> `<li> ${user.firstName} -- ${user.email} </li>`).join('')}
     </ul>
    `
    return res.send(html)
})

app.route('/api/users/:id')
.get(async (req, res)=>{
    const users = await user.findById(req.params.id)

    if (!users) {
        return res.status(404).json({message: "User not found!"})
    }
    else {
        return res.status(200).json(users)
    }
    //return res.json(user)
})
.patch(async (req, res)=>{
    const users = await user.findByIdAndUpdate(req.params.id, {lastName: "Micheal"})
    return res.status(200).json(users)
})
.delete( async (req, res)=>{
    const users = await user.findByIdAndDelete(req.params.id)
    return res.status(200).json(users)
})

// using a plugin
app.use(express.json())

app.post('/api/users', async (req, res)=>{
    const body = req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({message: "All fields are required!"})
    }
    else {
        const results = await user.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title,
            gender: body.gender

        })

        console.log("Results:", results)
        return res.status(201).json({msg: "Success"})

    }
    
    //console.log(`Body: ${body}`)
})

const PORT = 8000

app.listen(PORT, ()=>{
    console.log('Listening on server: ', PORT)
})
                 // when you add (/) ane something after the local host while connecting mongodb
                 // A new database is automatically created
mongoose.connect('mongodb://localhost:27017/myDB2')
.then(()=>{
    console.log("MongoDb connected")

})
.catch((err)=>{console.log("error", err)})

