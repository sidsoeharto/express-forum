const express = require('express')
const router = express.Router()

const subforumRoutes = require('./subforum')
const postRoutes = require('./post')

const Controller = require('../controllers/controller')

router.get('/', Controller.showFrontPage)

//router.get('/login', Controller.showLoginPage)

//router.get('/register', Controller.showRegisterPage)

router.use('/sf', subforumRoutes)

router.use('/submit', postRoutes)

module.exports = router