const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // I used monogoose to connect this project to the DB on monogoDB
  mongoose
    .connect(
        process.env.DB_URL,
      {
        // to ensure if the connection is done or not
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;