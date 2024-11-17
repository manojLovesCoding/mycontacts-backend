const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: [true, "Please add the user name"] },
    email: { type: String, required: [true, "Please add the email address"], unique: [true, "email address already taken"] },
    password: { type: String, required: [true, "Please add the user password"] },
},
    {
        timestamp: true,
    });

module.exports = mongoose.model("user", userSchema);