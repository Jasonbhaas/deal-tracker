const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Create and Save a new users
exports.create = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "Please include all fields"
    });
  }
  const emailLower = email.toLowerCase();
  User.findOne({ emailLower }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
  });
  const newUser = new User({
    name: name,
    email: emailLower,
    password: password
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then(user => {
        createToken(user, res);
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      msg: "Please include all fields"
    });
  }
  const emailLower = email.toLowerCase();
  User.findOne({ email: emailLower }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    bcrypt.compare(password, user.password).then(correctPassword => {
      if (correctPassword) {
        createToken(user, res);
      } else
        res.status(400).json({ msg: "Password and username did not match" });
    });
  });
};

// Get the user data from the auth token
exports.getUser = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.sendStatus(404));
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.sendStatus(404));
};

createToken = function(user, res) {
  jwt.sign(
    { id: user.id },
    config.get("jwtSecret"),
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.json({
        token: token,
        user: {
          name: user.name,
          id: user._id,
          email: user.email
        }
      });
    }
  );
};
