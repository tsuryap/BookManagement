app.service('AddBookService', ['$http', function($http) {
    var req = {
        method: 'GET',
        url: 'addBook',
        headers: {
            'Content-Type': 'applicaiton/json',
        }
    };
    this.addBook = function(bookObj) {
        req.data = bookObj;
        return $http(req);
    };
}]);
