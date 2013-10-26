var express = require('express');
var app = express();
var fs = require('fs');
var buf = require('buf');
app.use(express.logger());

app.get('/', function(request, response) {
    var file_in_buffer = fs.readFileSync('/index.html');
    
    var file_as_string = buf.toString(file_in_buffer);

    response.send(file_as_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});