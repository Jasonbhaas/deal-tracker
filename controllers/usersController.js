const User = require("../models/user.js");

// Create and Save a new users
exports.create = (req, res) => {
  User.create(req.body)
    .then(response => res.json(response))
    .catch(err => {
      res.sendStatus(500);
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.sendStatus(404));
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(500));
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.sendStatus(404));
};
