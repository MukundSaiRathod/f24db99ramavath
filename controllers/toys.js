// // const Toy = require('../models/toys');

// // exports.toy_list = async function(req, res) {
// //   try {
// //       const toys = await Toy.find();
// //       res.render('toys', { results: toys });
// //   } catch (err) {
// //       res.status(500).send(`Error: ${err}`);
// //   }
// // };

// // // for a specific toy.
// // exports.toy_detail = async function(req, res) {
// //     console.log("detail" + req.params.id)
// //     try {
// //     result = await Toy.findById( req.params.id)
// //     res.send(result)
// //     } catch (error) {
// //     res.status(500)
// //     res.send(`{"error": document for id ${req.params.id} not found`);
// //     }
// //     };
// // // exports.toy_detail = function(req, res) {
// // //   res.send('NOT IMPLEMENTED: Toy detail: ' + req.params.id);
// // // };

// // exports.toy_create_post = async function(req, res) {
// //   let document = new Toy();
// //   document.name = req.body.name;
// //   document.toy_type = req.body.toy_type;
// //   document.age_range = req.body.age_range;
// //   try {
// //     let result = await document.save();
// //     res.send(result);
// //   } catch (err) {
// //     res.status(500);
// //     res.send(`{"error": ${err}}`);
// //   }
// // };

// // // exports.toy_delete = async function (req, res) {
// // //   console.log("delete " + req.params.id);
// // //   try {
// // //       const result = await Toy.findByIdAndDelete(req.params.id);
// // //       console.log("Removed " + result);
// // //       res.send(result);
// // //   } catch (err) {
// // //       res.status(500);
// // //       res.send(`{"error": Error deleting ${err}}`);
// // //   }
// // // };

// // // exports.toy_delete = function(req, res) {
// // //   res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// // // };

// // // exports.toy_update_put = function(req, res) {
// // //   res.send('NOT IMPLEMENTED: Toy update PUT ' + req.params.id);
// // // };

// // // Handle Toy update form on PUT.
// // exports.toy_update_put = async function(req, res) {
// //     console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`); // Log request details
// //     try {
// //         // Find the toy by ID
// //         let toUpdate = await Toy.findById(req.params.id);
 
// //         // Update the toy properties if they are provided in the request body
// //         if (req.body.toy_type) toUpdate.toy_type = req.body.toy_type;
// //         if (req.body.cost) toUpdate.cost = req.body.cost;
// //         if (req.body.size) toUpdate.size = req.body.size;
// //         if (req.body.checkboxsale) toUpdate.sale = true;
// //         else toUpdate.sale = false;
 
// //         // Save the updated document
// //         let result = await toUpdate.save();
// //         console.log("Success " + result);
// //         res.send(result); // Send the updated document as JSON
// //     } catch (err) {
// //         res.status(500); // Internal server error status code
// //         res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
// //     }
// // };

// // // // Handle Toy delete on DELETE.
// // // exports.toy_delete = async function(req, res) {
// // // console.log("delete " + req.params.id)
// // // try {
// // // result = await Toy.findByIdAndDelete( req.params.id)
// // // console.log("Removed " + result)
// // // res.send(result)
// // // } catch (err) {
// // // res.status(500)
// // // res.send(`{"error": Error deleting ${err}}`);
// // // }
// // // };

// // exports.toy_delete = async function(req, res) {
// //   try {
// //       const result = await Toy.findByIdAndDelete(req.params.id);
// //       if (!result) {
// //           res.status(404).send('Toy not found');
// //           return;
// //       }
// //       res.send(`Toy with id ${req.params.id} was deleted.`);
// //   } catch (err) {
// //       res.status(500).send(`Error: ${err}`);
// //   }
// // };


// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// const Toy = require('../models/toys');

// //Get all Read
// exports.toy_list = async function (req, res) {
//     try {
//         const toys = await Toy.find();
//         res.render('toys', { results: toys });
//     } catch (err) {
//         res.status(500).send(`Error: ${err}`);
//     }
// };

// exports.toy_create_post = async function (req, res) {
//   let document = new Toy();
//   document.name = req.body.name;
//   document.age_range = req.body.age_range;
//   document.type = req.body.type;
//   try {
//       let result = await document.save();
//       res.send(result);
//   } catch (err) {
//       res.status(500);
//       res.send(`{"error": ${err}}`);
//   }
// };


// exports.toy_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
// };

// //put one update
// // Toy controller (controllers/toys.js)
// exports.toy_update_put = async function (req, res) {
//     console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
//     try {
//         let toUpdate = await Toy.findById(req.params.id);
//         // Update properties
//         if (req.body.name) toUpdate.name = req.body.name;
//         if (req.body.age_range) toUpdate.age_range = req.body.age_range;
//         if (req.body.toy_type) toUpdate.toy_type = req.body.toy_type;
//         let result = await toUpdate.save();
//         console.log("Success " + result);
//         res.send(result);
//     } catch (err) {
//         res.status(500);
//         res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
//     }
// };

// //read one
// exports.toy_detail = async function (req, res) {
//     console.log("detail" + req.params.id);
//     try {
//         let result = await Toy.findById(req.params.id);
//         res.send(result);
//     } catch (error) {
//         res.status(500);
//         res.send(`{"error": document for id ${req.params.id} not found`);
//     }
// };

// //delete one
// exports.toy_delete = async function (req, res) {
//     console.log("delete " + req.params.id);
//     try {
//         const result = await Toy.findByIdAndDelete(req.params.id);
//         console.log("Removed " + result);
//         res.send(result);
//     } catch (err) {
//         res.status(500);
//         res.send(`{"error": Error deleting ${err}}`);
//     }
// };

// //single view
// exports.toy_view_one_Page = async function (req, res) {
//     console.log("single view for id " + req.query.id);
//     try {
//         result = await Toy.findById(req.query.id);
//         res.render('toysdetail',
//             { title: 'Toy Detail', toShow: result });
//     } catch (err) {
//         res.status(500);
//         res.send(`{'error': '${err}'}`);
//     }
// };

// exports.toy_create_Page = function (req, res) {
//     console.log("create view");
//     try {
//         res.render('toyscreate', { title: 'Toy Create' });
//     } catch (err) {
//         res.status(500);
//         res.send(`{'error': '${err}'}`);
//     }
// }

// exports.toy_update_Page = async function (req, res) {
//     console.log("update view for item " + req.query.id)
//     try {
//         let result = await Toy.findById(req.query.id)
//         res.render('toysupdate', { title: 'Toys Update', toShow: result });
//     }
//     catch (err) {
//         res.status(500)
//         res.send(`{'error': '${err}'}`);
//     }
// };

// exports.toy_delete_Page = async function (req, res) {
//     console.log("Delete view for id " + req.query.id)
//     try {
//         result = await Toy.findById(req.query.id)
//         res.render('toysdelete', {
//             title: 'Toys Delete', toShow:
//                 result
//         });
//     }
//     catch (err) {
//         res.status(500)
//         res.send(`{'error': '${err}'}`);
//     }
// };

const Toy = require('../models/toys');

//Get all Read
exports.toy_list = async function (req, res) {
    try {
        const toys = await Toy.find();
        res.render('toys', { results: toys });
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
};

//create one
exports.toy_create_post = async function (req, res) {
    let document = new Toy();
    document.name = req.body.name;
    document.age_range = req.body.age_range;
    document.toy_type = req.body.toy_type;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.toy_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Toy delete DELETE ' + req.params.id);
};

//put one update
// Toy controller (controllers/toys.js)
exports.toy_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Toy.findById(req.params.id);
        // Update properties
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.type) toUpdate.toy_type = req.body.toy_type;
        if (req.body.age_range) toUpdate.age_range = req.body.age_range;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

//read one
exports.toy_detail = async function (req, res) {
    console.log("detail" + req.params.id);
    try {
        let result = await Toy.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//delete one
exports.toy_delete = async function (req, res) {
    console.log("delete " + req.params.id);
    try {
        const result = await Toy.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//single view
exports.toy_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id);
    try {
        result = await Toy.findById(req.query.id);
        res.render('toysdetail',
            { title: 'Toy Detail', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

exports.toy_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render('toyscreate', { title: 'Toy Create' });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
}

exports.toy_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Toy.findById(req.query.id)
        res.render('toysupdate', { title: 'Toys Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.toy_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Toy.findById(req.query.id)
        res.render('toysdelete', {
            title: 'Toys Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};