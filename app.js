var express = require('express')
var app = express();

var mongoose = require('mongoose');
var config = require('./configuration/config');

var route = require('./routes/genRoute')

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoconfig.database);

app.use('/static',express.static('public'));

app.use('/',route);

//homepage
app.get('/', function(req, res) {
  res.sendfile('./view/index.html');
});


var server = app.listen('8080',function(){
	console.log("server started at port 8080");
}) 