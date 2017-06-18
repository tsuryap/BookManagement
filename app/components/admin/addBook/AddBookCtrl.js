app.controller('AddBook', ['$scope', 'Constants', function($scope, Constants) {
    $scope.bookHeading = Constants.admin.addBook.heading;
    $scope.bookObj = {};
    $scope.addBook = function(bookform) {
        console.log($scope.bookObj);
        debugger;
        if (!bookform.$valid) {
            showValidationErrors(bookform, true);
            return false;
        }
    }
    $scope.reset = function(bookform) {
        showValidationErrors(bookform, false);
        $scope.bookObj = {};
    };

    function showValidationErrors(bookform, touched) {
        _.each(bookform.$error, function(value, key) {
            _.each(bookform.$error[key], function(value) {
                value.$touched = touched;
            });
        });
    }

}]);
