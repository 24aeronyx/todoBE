const express = require('express')
const { getAllTodo, getTodoById, addTodo } = require('../controllers/todo-controller')

const route = express.Router()

route.get('/', getAllTodo)
route.get('/:id', getTodoById)
route.post('/', addTodo)
route.get('/')

module.exports = route