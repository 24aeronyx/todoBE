const bcrypt = require('bcrypt')
const Todo = require('../models/Todo')

module.exports = {
    getAllTodo : (req, res) => {
        let data = req.body
    },

    getTodoById : (req, res) => {

    },

    addTodo : async (req, res) => {
        let data = req.body

        try{
            await Todo.create(data)

            res.status(201).json({
                message: 'Berhasil menambahkan user'
            })
        } catch(error) {
            res.json({
                message: 'Gagal menambahkan user',
                error: error.message
            })
        }
    }
}