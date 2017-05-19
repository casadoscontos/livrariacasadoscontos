// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var express = require('express');
var server = express();
var http = require("http");
var path = require('path');
var PORT = process.env.PORT || 8070;
var app = express();

var compression = require('compression');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:8070...');