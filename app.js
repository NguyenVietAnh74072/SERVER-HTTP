var express = require('express');
const { send } = require('process');
var app = express(); // goi module tu cai moi cai
var server = require('http').createServer(app) //tao app va lang nghe port 3000
server.listen(3000)

app.get("/",function(req,res)
{
  //  res.send("<front color = red>helo world</front>" ); // send gui cau lenh
  res.sendFile("../baitap/wedsnervice.html");
})
app.get("/tong/:so1/:so2/:so3",function(req,res)
{

  var n = req.params.so1;
  n=parseInt(n);
  var m= req.params.so2;
  m=parseInt(m);
  var k= req.params.so3;
  k=parseInt(k);
  var tong =n+m+k;
  res.send("<h1> "+tong+"</h1>");
}
)

