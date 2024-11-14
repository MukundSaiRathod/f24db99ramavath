// /models/toy.js
const mongoose = require("mongoose");

// Define the toy schema
const toySchema = mongoose.Schema({
  name: String,
  toy_type: String,
  age_range: String
});

// Export the model to use in the app.js file
module.exports = mongoose.model("toy", toySchema);
