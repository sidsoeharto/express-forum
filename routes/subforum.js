const express = require('express')
const router = express.Router()

const SubforumController = require("../controllers/subforumcontroller")

router.get('/', SubforumController.showAllSubforums)

router.get('/:subforum', SubforumController.showSubforum)

//router.get('/:subforum/:id', SubforumController.getPost)

module.exports = router