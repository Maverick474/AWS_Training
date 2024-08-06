const express = require('express')

const app  = express()
const users = require('./MOCK_DATA.json')

app.get('/users', (req, res)=> {
    const html = `
    <ul>
     ${users.map((user)=> `<li> ${user.first_name} </li>`).join('')}
    </ul>
    `
    return res.send(html)
})

// Always a best practise to use /api/ for returning json data
app.get('/api/users', (req, res)=> res.json(users))

//Dynamcially for getting users by the id ---> /api/users/:id

/*
app.get('/api/users/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id)
    if (user) {
        return res.json(user)
    }
    else{
        res.status(404).json({Message: "Error"})
    }
})

*/
// There is another way of getting the data with id by using app.route

app.route('/api/users/:id')
.get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id)
    return res.json(user)
})
.post((req, res)=>{
    res.json({message: "Pending"})
})
.patch((req, res)=>{
    res.json({message: "Pending"})
})
.delete((req, res)=>{
    res.json({message: "Pending"})
})

app.listen(8000, ()=>console.log('Server is running'))
