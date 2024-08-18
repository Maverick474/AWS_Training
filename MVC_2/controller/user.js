const User = require('../models/users')
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service/auth')

const userSignUp = async(req, res) => {
    const {name, email, password} = req.body
    await User.create({
        name, 
        email,
        password
    })
    res.redirect('/login')
}

const userLogin = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email, password})
    console.log('User', user)

    if(!user) {
        res.render('login', {
            message: "Invalid creditenails"
        })
    }
    const sessionID = uuidv4()
    setUser(sessionID, user)
    res.cookie("uid", sessionID)
    return res.redirect('/')

}

module.exports = {userSignUp, userLogin}