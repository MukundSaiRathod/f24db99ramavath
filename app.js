var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
 
const toysRouter = require('./routes/toys');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const gridRouter = require('./routes/grid');
const randomitemRouter = require('./routes/randomitem');
const searchResultsRouter = require('./routes/searchresults');  // Correct import for searchResultsRouter
var resourceRouter = require('./routes/resource');

var app = express();
 
 
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
// Define routes
app.use('/', indexRouter);          // Home route
app.use('/users', usersRouter);     // Users route
app.use('/toys', toysRouter);
app.use('/grid', gridRouter);           // Grid route
app.use('/', randomitemRouter);     // Random item route
app.use('/searchresults', searchResultsRouter);  // Correct usage of searchResultsRouter
app.use('/resource',resourceRouter)
 
var Toy = require("./models/toy");
const toy = require('./models/toy');
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
 
module.exports = app;
 
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
 
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
try {
  // Delete all documents from the "toy" collection
  await Toy.deleteMany();

  // Create instances of the Toy model
  let instance1 = new Toy({ name: "Camry", toy_type: 'sedan', age_range: 200 });
  await instance1.save();  // Wait for the save operation to complete
  console.log("First object saved");

  let instance2 = new Toy({ name: "F150", toy_type: 'truck', age_range: 800 });
  await instance2.save();  // Wait for the save operation to complete
  console.log("Second object saved");

  let instance3 = new Toy({ name: "Wrangler", toy_type: 'SUV', age_range: 400 });
  await instance3.save();  // Wait for the save operation to complete
  console.log("Third object saved");
} catch (err) {
  console.error("Error occurred:", err);
}
}
let reseed = true;
if (reseed) {recreateDB();}