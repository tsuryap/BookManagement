exports.addBook = function(connection, req, res) {
    console.log('test');

    var inputObj = req.body;
    var values = [
        [inputObj.bookCategory, inputObj.bookAuthor, inputObj.bookTitle, inputObj.bookPublisher, new Date(), new Date()]
    ];
    var sql = "insert into books (book_category,book_author,book_title,book_publisher,createdDate,updatedDate) VALUES ?";

    console.log(values);
    connection.query(sql, [values], function(err, rows, fields) {
        if (err) {
            console.log(err)
                //  res.json({ 'success': false });
        } else {
            console.log('query successed');
            res.json({ 'success': true });
        }

    });
};
