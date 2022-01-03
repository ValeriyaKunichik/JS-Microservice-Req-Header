
require('dotenv').config();
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  var software = req.headers['user-agent'];
  var ip = require("ip");  
  var lang = req.headers["accept-language"];
  
  res.json({"ipaddress":ip.address(),"language":lang,"software": software});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
