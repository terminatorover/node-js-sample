var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var file_as_string = "DUDE I'M DEPLOYING ";

    response.send(file_as_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});