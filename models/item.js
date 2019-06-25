const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

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
  createdBy: {
    type: ObjectId,
    required: true
  },
  image: String,
  vendors: [{ vendor: String }],
  url: String
});

module.exports = Item = mongoose.model("item", ItemSchema);
