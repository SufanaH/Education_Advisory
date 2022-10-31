const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "can't be blank"],
        //match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    email: {
        type: String,
        required: [true, "Please provide your email!"],
        unique: [true, "Email Exist"],
    },
  
    password: {
            type: String,
            required: [true, "Please provide a password!"],
            unique: false,
    },
  }, {timestamps: true})


  module.exports = mongoose.model("Users", UserSchema);
