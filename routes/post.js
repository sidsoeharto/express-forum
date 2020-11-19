const express = require('express')
const router = express.Router()

const PostController = require("../controllers/postcontroller")


router.get('/post', PostController.showCreatePost)

router.post('/post', PostController.createPost)
//router.get('/', PostController.showAllSubforums)

// router.get('/:subforum', SubforumController.showSubforum)

// router.get('/:subforum/:id', SubforumController.getPost)

module.exports = router