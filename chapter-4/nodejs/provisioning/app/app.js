// Load express module.
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!');
});

// Listen on port 80
app.listen(80);
console.log('Express server stated successfully.');