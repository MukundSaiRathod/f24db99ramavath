const Toy = require('../models/toys');

exports.toy_list = async function(req, res) {
  try {
      const toys = await Toy.find();
      res.render('toys', { results: toys });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};
  
exports.toy_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
};

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


exports.toy_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};

exports.toy_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Toy update PUT ' + req.params.id);
};

