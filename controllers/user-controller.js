const bcrypt = require('bcrypt')
const User = require("../models/User")

module.exports = {
    getAllUser : (req, res) => {
        let data = req.body
    },

    getUserById : (req, res) => {

    },

    addUser : async (req, res) => {
        let data = req.body

        try{
            await User.create(data)

            res.status(201).json({
                message: 'Berhasil menambahkan user'
            })
        } catch {
            res.json({
                message: 'Gagal menambahkan user'
            })
        }
    }
}