var express = require('express'),
    mySql = require('mysql'),
    mySqlConnection = require('./server-db.js'),
    app = express(),
    bodyParser = require('body-parser'),
    bookModule = require("./modules/books/BookService.js"),
    connection = mySqlConnection.createConnection();


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


app.use(express.static(__dirname + '\\build'));

app.post('/addBook', function(req, res) {
    bookModule.addBook(connection, req, res);
});


var server = app.listen(1841, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
