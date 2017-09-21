// var express = require('express');
// var ejsLayouts = require('express-ejs-layouts'); //allows you to utulize layouts and you'll need a views/layout.ejs file
// var multer = require('multer'); // middleware
// // const ejsLint = require('ejs-lint');
// var upload = multer({dest: './uploads/'});
// var cloudinary = require('cloudinary');
// require('dotenv').config();
//
// var app = express();
//
// app.set('view engine', 'ejs');
// app.use(ejsLayouts);
//
// var images = [];
//
// app.get('/', function(req, res) {
//   res.render('index', {images, cloudinary});
// });
//
// app.post('/', upload.single('myFile'), function(req, res) { //matches get location '/' because we are posting FROM '/' -- 'myFile' refers to index.ejs
//   cloudinary.uploader.upload(req.file.path, function(result) { //uploader = built in function that allows me to upload shit.
//     images.push(result.public_id);
//     res.redirect('/');
//   })
//   // res.send(req.file);
// });
//
// app.listen(3000);

var express = require('express');
var multer = require('multer');
var upload = multer({dest: './uploads/'});
var cloudinary = require('cloudinary');
var ejsLayouts = require('express-ejs-layouts');
require('dotenv').config()
var app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

var images = [];

app.get('/', function(req, res) {
  res.render('index', {images, cloudinary});
});

app.post('/', upload.single('myFile'), function(req, res){
  cloudinary.uploader.upload(req.file.path, function(result){
    images.push(result.public_id);
    res.redirect('/');
  });
});

app.listen(3000);
