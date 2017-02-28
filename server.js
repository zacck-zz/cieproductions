//load module
var express = require('express');
var path = require('path');
var compression = require('compression');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

//HTTPS TO HTTP
app.use(function (req, res, next){
  //if over http
  if(req.headers['x-forwarded-proto'] ===  'http') {
    res.redirect('https://'+req.hostname +req.url);
  } else {
    next();
  }
});

//max age of cache and enable compression
var oneYear = 1 * 365 * 24 * 60 * 60 * 1000;
app.use(compression());
//show app folder to serve
app.use(express.static(__dirname +'/public/')); // specifies a a folder name to expose


//start the server
app.listen(PORT, function(){ // takes the port you are serving to and a function
  console.log('Express Server is up on port ' + PORT);//log top console
});
