const bcrypt = require("bcrypt");
const User = require("../models/User");
const Todo = require("../models/Todo");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll({include: Todo});

    res.json({
      message: "Berhasil mendapatkan user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
  
      const user = await User.findByPk(userId, {
        include: Todo, // Include associated Todo records
      });
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      res.json({
        message: "Successfully retrieved user by id",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  

  addUser: async (req, res) => {
    let data = req.body;

    try {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashPassword;

      await User.create(data);

      res.status(201).json({
        message: "Berhasil menambahkan user",
      });
    } catch {
      res.json({
        message: "Gagal menambahkan user",
      });
    }
  },
};
