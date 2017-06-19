app.service('AddBookService', ['$http', function($http) {
    var req = {
        method: 'POST',
        url: 'addBook',
        headers: {
            'Content-Type': "application/json"
        },
    };
    this.addBook = function(bookObj) {
        req.data = bookObj;
        return $http(req);
    };
}]);
