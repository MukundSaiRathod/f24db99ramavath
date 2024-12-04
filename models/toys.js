const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
  name: {type: String,required: true, 
  },
  toy_type: {type: String,required:true,
  },
  age_range: {type: String, required: true,  
    minlength: [3, 'Age range should be at least 3 characters long'],
    maxlength: [20, 'Age range should not exceed 20 characters'],  
  },
});

module.exports = mongoose.model("Toy", toySchema);
