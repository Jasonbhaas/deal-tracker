const express = require("express");
const router = express.Router();
const auth = require("../../Middleware/auth");

// Items controller
const Users = require("../../controllers/usersController");

// @route   GET api/users/id
// @desc    Returns current user info using JWT token
// @access  Public
router.get("/", auth, Users.getUser);

// @route   POST api/users
// @desc    Create an item
// @access  Public
router.post("/", Users.create);

// @route   PUT api/users/id/price
// @desc    Update user fields
// @access  Private
router.put("/:id", auth, Users.update);

// @route   DELETE api/users/:id
// @desc    Deletes an item
// @access  Private
router.delete("/:id", auth, Users.delete);

// @route   POST /api/users/login
// @desc    Log in to account
// @access  Public
router.post("/login", Users.login);

module.exports = router;
