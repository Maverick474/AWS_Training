const express = require('express')
const {handleGetAllUsers, handleCreateUser, getUserById, updateUserById, deleteUserById} = require('../controllers/controller')
const router = express.Router()

router.route('/')
.get(handleGetAllUsers)
.post(handleCreateUser)

//setting up routes

router.route('/:id')
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById)

module.exports = router