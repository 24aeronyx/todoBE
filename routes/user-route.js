const express = require('express')
const { getAllUser, getUserById, addUser } = require('../controllers/user-controller')
const route = express.Router()

route.get('/', getAllUser)
route.get('/:id', getUserById)
route.post('/', addUser)
route.get('/')

module.exports = route