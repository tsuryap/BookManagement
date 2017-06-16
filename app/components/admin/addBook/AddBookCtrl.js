app.controller('AddBook', ['$scope', 'Constants', function($scope, Constants) {
    $scope.bookHeading = Constants.admin.addBook.heading;
    $scope.bookObj = {};
    $scope.addBook = function() {
        console.log($scope.bookObj);
    }
    $scope.reset = function() {
        $scope.bookObj = {};
    };

}]);
