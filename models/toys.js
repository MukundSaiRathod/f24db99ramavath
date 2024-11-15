const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
  name: String,
  toy_type: String,
  age_range: String
});

module.exports = mongoose.model("Toy", toySchema);