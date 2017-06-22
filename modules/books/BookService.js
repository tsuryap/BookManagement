exports.addBook = function(connection, req, res) {
    var inputObj = req.body,
        values = [
            [inputObj.bookCategory, inputObj.bookAuthor, inputObj.bookTitle, inputObj.bookPublisher, new Date(), new Date()]
        ],
        sql = "insert into books (book_category,book_author,book_title,book_publisher,createdDate,updatedDate) VALUES ?";

    connection.query(sql, [values], function(err, rows, fields) {
        if (err) {
            res.json({ 'success': false });
        } else {
            console.log('query successed');
            res.json({ 'success': true });
        }
    });
};
