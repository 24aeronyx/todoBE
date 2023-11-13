const express = require('express')
const route = express.Router()

const userRoutes = require('./user-route.js')

route.get('/', (req, res) =>{
    req.json({
        message: 'Welcome to express'
    })
})

route.use('/user', userRoutes)

module.exports = route