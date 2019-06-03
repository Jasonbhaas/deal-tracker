const express = require("express");
const router = express.Router();

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
// @access  Public
router.post("/", Items.create);

// @route   PUT api/items/id/price
// @desc    Add to the price history
// @access  Public
router.put("/:id/price", Items.addPrice);

// @route   PUT api/items/id/price
// @desc    Add to the price history
// @access  Public
router.put("/:id", Items.update);

// @route   DELETE api/items/:id
// @desc    Deletes an item
// @access  Public
router.delete("/:id", Items.delete);

module.exports = router;
