var express = require('express');
var router = express.Router();
var toy_controller = require('../controllers/toys');


router.get('/', toy_controller.toy_list);

router.post('/create', toy_controller.toy_create_post);

router.get('/:id', toy_controller.toy_detail);

router.get('/toys/:id', toy_controller.toy_detail);

router.put('/toys/:id',toy_controller.toy_update_put)

router.delete('/toys/:id', toy_controller.toy_delete);

// router.get('/:id/update', toy_controller.toy_update_get);

// router.get('/:id/delete', toy_controller.toy_delete_get);

// router.post('/:id/update', toy_controller.toy_update_post);

// router.post('/:id/delete', toy_controller.toy_delete_post);


module.exports = router;