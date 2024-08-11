const User = require('../models/model')

const handleGetAllUsers = async(req, res) => {
    const user = await User.find({})
    res.status(200).json(user)
}

const handleCreateUser = async(req, res) => {
    const body = req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
        return res.status(400).json({Message: "All fields are required!"})
    }
    else {
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title,
            gender: body.gender
        })

        console.log(result)
        res.status(201).json({Message: "Created"})
    }
}

const getUserById = async(req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}

const updateUserById = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {...req.body})
    res.status(200).json({Message: "Updated"})
}

const deleteUserById = async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({Message: "Successfully deleted"})
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser,
    getUserById,
    updateUserById,
    deleteUserById
}