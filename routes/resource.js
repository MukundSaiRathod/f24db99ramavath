var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var toy_controller = require('../controllers/toy');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/toy', toy_controller.toy_create_post);
// DELETE request to delete Costume.
router.delete('/toy/:id', toy_controller.toy_delete);
// PUT request to update Costume.
router.put('/toy/:id', toy_controller.toy_update_put);
// GET request for one Costume.
router.get('/toy/:id', toy_controller.toy_detail);
// GET request for list of all Costume items.
router.get('/toy', toy_controller.toy_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"toys", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
