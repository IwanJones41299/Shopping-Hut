const express = require('express')
const router = express.Router()

//Loads controllers
const{
    registerController
} = require('../controllers/auth_controller.js')

router.post('/register', registerController)

module.exports = router