// var express = require('express');
// var router = express.Router();
// var toy_controller = require('../controllers/toys');


// router.get('/', toy_controller.toy_list);

// router.post('/create', toy_controller.toy_create_post);

// // router.get('/:id', toy_controller.toy_detail);

// router.get('/toys/:id', toy_controller.toy_detail);

// router.put('/toys/:id',toy_controller.toy_update_put)

// router.delete('/toys/:id', toy_controller.toy_delete);

// // router.get('/:id/update', toy_controller.toy_update_get);

// // router.get('/:id/delete', toy_controller.toy_delete_get);

// // router.post('/:id/update', toy_controller.toy_update_post);

// // router.post('/:id/delete', toy_controller.toy_delete_post);


// module.exports = router;


/////////////////////////////////////////////////////////////////////////////////////////////////////
var express = require('express');
var router = express.Router();
var toy_controller = require('../controllers/toys');
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

router.get('/', toy_controller.toy_list);

router.post('/', toy_controller.toy_create_post);

//router.get('/:id', toy_controller.toy_update_get);

//router.get('/:id', toy_controller.toy_delete_get);

router.put('/toys:id', toy_controller.toy_update_put);

router.delete('/toys:id', toy_controller.toy_delete);

router.get('/toys:id', toy_controller.toy_detail);

router.get('/detail', toy_controller.toy_view_one_Page);

router.get('/create', toy_controller.toy_create_Page);

router.get('/update',secured,toy_controller.toy_update_Page);

router.get('/delete', toy_controller.toy_delete_Page);

module.exports = router;