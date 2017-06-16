app.directive('mandatory', function() {
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<span class="red">*</span>',
        // templateUrl: '',
        replace: false,
        // transclude: true,

    };
});
