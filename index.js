var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var multer = require('multer');
var cloudinary = require('cloudinary');
var app = express();
var upload = multer({ dest: './uploads/' });

var images = [];

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index', {images, cloudinary});
});

app.post('/', upload.single('myFile'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(result) {
    images.push(result.public_id);
    res.redirect('/');
  });
});

app.listen(3000);
