const express = require('express')
const feedController = require('../controllers/feed')

const router = express.Router()

router.get('/posts', feedController.getPosts)

//posting a request
router.post('/post', feedController.createPosts)

module.exports = router