app.controller('BookCtrl', ['$scope', 'BookService', function($scope, BookService) {
    $scope.gridOptions = {
        columnDefs: [
            { field: 'book_title', displayName: 'Book Title' },
            { field: 'book_author', displayName: 'Book Author' },
            { field: 'book_publisher', displayName: 'Book Publisheer' },
            { field: 'book_category', displayName: 'Book Category' }
        ],
        height: 300
    };
    var getBookPromise = BookService.getBooks();
    $scope.setLoading(true);
    getBookPromise.then(function successCallback(response) {
        $scope.setLoading(false);
        $scope.gridOptions.data = response.data.data;

    }, function errorCallback(response) {
        $scope.setLoading(false);
    });
}]);
