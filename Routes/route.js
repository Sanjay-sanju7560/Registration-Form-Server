const express = require('express')
const router = express.Router()
const studentController = require('../Controller/studentController')


// route for Register
router.post('/register',studentController.register)