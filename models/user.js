const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  mail: { type: String },
  address: { type: String },
  Booked: {
    type: Array,
  },
});

module.exports = mongoose.model("booking", userSchema);
