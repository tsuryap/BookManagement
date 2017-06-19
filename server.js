var express = require('express'),
    mySql = require('mysql'),
    mySqlConnection = require('./server-db.js'),
    app = express(),
    connection = mySqlConnection.createConnection();

app.use(express.static(__dirname + '\\build'));

app.get('/addBook', function(req, res) {
    console.log(req.query);
    res.json({ "success": true });
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();

var server = app.listen(1841, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
