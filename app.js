var express = require('express');
var app = express(); // goi module tu cai moi cai
var server = require('http').createServer(app) //tao app va lang nghe port 3000
server.listen(3000)

app.get("/",function(req,res)
{
  //  res.send("<front color = red>helo world</front>" ); // send gui cau lenh
  res.sendFile("../baitap/wedservice.html");
})