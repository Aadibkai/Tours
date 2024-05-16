const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String},
});

module.exports = mongoose.model("auth", AuthSchema);
