const asyncHandler = require("express-async-handler")
//desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" });
});

//desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login user" });
});

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});



module.exports = { registerUser, loginUser, currentUser }