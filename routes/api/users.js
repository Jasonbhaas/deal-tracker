const express = require("express");
const router = express.Router();

// Items controller
const Users = require("../../controllers/usersController");

// @route   GET api/users/id
// @desc    Get a single item
// @access  Public
router.get("/:id", Users.findOne);

// @route   POST api/users
// @desc    Create an item
// @access  Public
router.post("/", Users.create);

// @route   PUT api/users/id/price
// @desc    Add to the price history
// @access  Public
router.put("/:id", Users.update);

// @route   DELETE api/users/:id
// @desc    Deletes an item
// @access  Public
router.delete("/:id", Users.delete);

module.exports = router;
