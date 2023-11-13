const express = require("express");
const app = express();
const db = require("./config/db");
const User = require("./models/User");




const PORT = process.env.PORT || 4000;

async function testCon() {
    try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
  
    //   await db.sync({force: true})
      await User.sync({force: true})
      console.log("All models were synchronized successfully.");
  
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

testCon()

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});


