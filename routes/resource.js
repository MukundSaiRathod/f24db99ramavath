
var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var toy_controller = require('../controllers/toys');

router.get('/', api_controller.api);

router.post('/toys', toy_controller.toy_create_post);

router.delete('/toys/:id', toy_controller.toy_delete);

router.put('/toys/:id', toy_controller.toy_update_put);

router.get('/toys/:id', toy_controller.toy_detail);

router.get('/toys', toy_controller.toy_list);

module.exports = router;
