const express = require("express");
const router = express.Router();
const auth = require("../../Middleware/auth");

// Items controller
const Items = require("../../controllers/itemsController");

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get("/", Items.findAll);

// @route   GET api/items/id
// @desc    Get a single item
// @access  Public
router.get("/:id", Items.findOne);

// @route   POST api/items
// @desc    Create an item
// @access  Private
router.post("/", auth, Items.create);

// @route   PUT api/items/id/price
// @desc    Add to the price history
// @access  Private
router.put("/:id/price", auth, Items.addPrice);

// @route   PUT api/items/id/price
// @desc    Update a single item
// @access  Private
router.put("/:id", auth, Items.update);

// @route   DELETE api/items/:id
// @desc    Deletes an item
// @access  Private
router.delete("/:id", auth, Items.delete);

module.exports = router;
