var mysql = require('mysql');
module.exports = {
    createConnection: function() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'book_mgmt'
        });
        return connection;
    }
};
