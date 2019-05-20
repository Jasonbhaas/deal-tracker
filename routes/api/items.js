const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    make: req.body.make
  });
  newItem.save().then(item => res.json(item));
});

// @route   PUT api/items/id
// @desc    Update an item
// @access  Public
router.put("/:id", (req, res) => {
  Item.updateOne(
    { _id: req.params.id },
    {
      $push: { priceHistory: { price: req.body.price } }
    }
  ).then(res.json({ success: true }));
});

// @route   DELETE api/items/:id
// @desc    Deletes an item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: fasle }));
});

module.exports = router;
