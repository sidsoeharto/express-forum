const express = require('express')
const router = express.Router()

const PostController = require("../controllers/postcontroller")


router.get('/post', PostController.showCreatePost)

router.post('/post', PostController.createPost)

router.get('/post/edit/:id', PostController.showEditPost)

router.post('/post/edit/:id', PostController.editPost)

router.delete('/post/delete/:id', PostController.deletePost)

module.exports = router