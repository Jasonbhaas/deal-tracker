const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Create schema
const WebsiteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: string,
    required: true
  },
  keywords: [
    {
      type: string
    }
  ]
});

module.exports = Item = mongoose.model("item", ItemSchema);
