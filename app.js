const express = require("express");
const app = express();
const db = require("./config/db");

async function testCon() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const PORT = process.env.PORT || 4000;

testCon()

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});


