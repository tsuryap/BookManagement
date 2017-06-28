app.service('BookService', ['$http', 'Util', function($http, Util) {
    var reqGetHeader = Util.requesGetHeaders;
    this.getBooks = function() {
        reqGetHeader.url = 'getBooks'
        return $http(reqGetHeader);
    };

}]);
