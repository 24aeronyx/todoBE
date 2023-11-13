const express = require('express')
const route = express.Router()

const userRoutes = require('./user-route.js')
const todoRoutes = require('./todo-route.js')

route.get('/', (req, res) =>{
    req.json({
        message: 'Welcome to express'
    })
})

route.use('/user', userRoutes)
route.use('/todo', todoRoutes)

module.exports = route