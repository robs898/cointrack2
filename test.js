var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

app.listen(port);
