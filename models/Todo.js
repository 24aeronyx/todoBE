const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Todo = sequelize.define(
  "todo",
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    user_id: {
        type: DataTypes.INTEGER
    }
    
  },
  {
    freezeTableName: true,
  }
);

module.exports = Todo


