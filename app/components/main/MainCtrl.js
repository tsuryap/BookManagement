app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.loading = false;
    $scope.setLoading = function(loading) {
        $scope.loading = loading;
    };
}]);
