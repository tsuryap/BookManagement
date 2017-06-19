app.controller('AddBook', ['$scope', 'Constants', 'Util', 'AddBookService', function($scope, Constants, Util, AddBookService) {
    $scope.bookHeading = Constants.admin.addBook.heading;
    $scope.bookObj = {};
    $scope.addBook = function(bookform) {
        console.log($scope.bookObj);
        if (!bookform.$valid) {
            Util.showFormValidationErrors(bookform, true);
            return false;
        }
        var addBookPromies = AddBookService.addBook($scope.bookObj);
        addBookPromies.then(function successCallback(response) {
            alert('Success')
        }, function errorCallback(response) {

            alert('failure')
        });

    }
    $scope.reset = function(bookform) {
        Util.showFormValidationErrors(bookform, false);
        $scope.bookObj = {};
    };

}]);
