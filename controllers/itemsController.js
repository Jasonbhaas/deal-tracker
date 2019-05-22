const Item = require("../models/item");

// Create and Save a new item
exports.create = (req, res) => {
  Item.create(req.body, err => {
    console.log(err);
  });

  // const newItem = new Item({
  //     name: req.body.name,
  //     price: req.body.price,
  //     make: req.body.make,
  //     image: req.body.image
  // });
  // newItem.save().then(item => res.json(item));
};

// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
};

// Find a single item with a itemId
exports.findOne = (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.sendStatus(404));
};

// Add a datapoint to the price history
exports.addPrice = (req, res) => {
  Item.updateOne(
    { _id: req.params.id },
    {
      $push: { priceHistory: { price: req.body.price } }
    }
  )
    .then(res.sendStatus(200))
    .catch(err => res.sendStatus(500));
};

// Update a item identified by the itemId in the request
exports.update = (req, res) => {
  Item.updateOne({ _id: req.params.id }, req.body)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(500));
};

// Delete a item with the specified itemId in the request
exports.delete = (req, res) => {};
