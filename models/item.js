const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  make: String,
  priceHistory: [
    {
      date: { type: Date, default: Date.now },
      price: Number
    }
  ],
  image: String
});

module.exports = Item = mongoose.model("item", ItemSchema);
