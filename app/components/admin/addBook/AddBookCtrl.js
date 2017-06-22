app.controller('AddBook', ['$scope', 'Constants', 'Util', 'AddBookService', function($scope, Constants, Util, AddBookService) {
    $scope.bookHeading = Constants.admin.addBook.heading;
    $scope.bookObj = {};
    $scope.status = {
        success: false,
        failure: false
    };
    $scope.addBook = function(bookform) {
        console.log($scope.bookObj);
        if (!bookform.$valid) {
            Util.showFormValidationErrors(bookform, true);
            return false;
        }
        var addBookPromies = AddBookService.addBook($scope.bookObj);
        $scope.setLoading(true);
        addBookPromies.then(function successCallback(response) {
            $scope.setLoading(false);
            response.data.success ? ($scope.status.success = true) : ($scope.status.failure = true);

        }, function errorCallback(response) {
            $scope.setLoading(false);
            $scope.status.failure = true;
        });

    }
    $scope.reset = function(bookform) {
        Util.showFormValidationErrors(bookform, false);
        $scope.bookObj = {};
    };

}]);
