var express = require('express');
var app = express();

app.route('/name').get((req, res) => {
    res.json({"name": req.query.first + ' ' + req.query.last});
}).post();

 module.exports = app;
