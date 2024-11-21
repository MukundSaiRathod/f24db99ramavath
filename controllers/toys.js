const Toy = require('../models/toys');

exports.toy_list = async function(req, res) {
  try {
      const toys = await Toy.find();
      res.render('toys', { results: toys });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};

// for a specific toy.
exports.toy_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Toy.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// exports.toy_detail = function(req, res) {
//   res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
// };

exports.toy_create_post = async function(req, res) {
  let document = new Toy();
  document.name = req.body.name;
  document.toy_type = req.body.toy_type;
  document.age_range = req.body.age_range;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// exports.toy_delete = async function (req, res) {
//   console.log("delete " + req.params.id);
//   try {
//       const result = await Toy.findByIdAndDelete(req.params.id);
//       console.log("Removed " + result);
//       res.send(result);
//   } catch (err) {
//       res.status(500);
//       res.send(`{"error": Error deleting ${err}}`);
//   }
// };

// exports.toy_delete = function(req, res) {
//   res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// };

// exports.toy_update_put = function(req, res) {
//   res.send('NOT IMPLEMENTED: Toy update PUT ' + req.params.id);
// };

// Handle Toy update form on PUT.
exports.toy_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`); // Log request details
    try {
        // Find the toy by ID
        let toUpdate = await Toy.findById(req.params.id);
 
        // Update the toy properties if they are provided in the request body
        if (req.body.toy_type) toUpdate.toy_type = req.body.toy_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.sale = false;
 
        // Save the updated document
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result); // Send the updated document as JSON
    } catch (err) {
        res.status(500); // Internal server error status code
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
};

// // Handle Toy delete on DELETE.
// exports.toy_delete = async function(req, res) {
// console.log("delete " + req.params.id)
// try {
// result = await Toy.findByIdAndDelete( req.params.id)
// console.log("Removed " + result)
// res.send(result)
// } catch (err) {
// res.status(500)
// res.send(`{"error": Error deleting ${err}}`);
// }
// };

exports.toy_delete = async function(req, res) {
  try {
      const result = await Toy.findByIdAndDelete(req.params.id);
      if (!result) {
          res.status(404).send('Toy not found');
          return;
      }
      res.send(`Toy with id ${req.params.id} was deleted.`);
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};