const Item = require("../models/item");

// Create and Save a new item
exports.create = (req, res) => {
  const { name, url, make, vendors } = req.body;
  const createdBy = req.user.id;

  if (!name || !url || !make || !vendors) {
    return res.status(400).json({
      msg: "Please include all necessary fields"
    });
  }
  const newItem = { name, url, make, vendors, createdBy };
  console.log(newItem);
  Item.create(newItem)
    .then(response => res.json(response))
    .catch(err => {
      res.sendStatus(500).json({ msg: "An error occurred on the server" });
    });
};

// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
  Item.find()
    .sort({ date: 1 })
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
  console.log(req.body);
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
exports.delete = (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.sendStatus(404));
};
