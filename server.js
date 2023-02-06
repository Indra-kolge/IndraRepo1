
var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");



app.get('/', function (req, res) {
   res.sendFile(path.join('/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:47};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at 8081");
})
