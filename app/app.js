angular.module('common', []);
var app = angular.module('bookmgmt', ['ui.router', 'common']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.html'
        })
        .state('dashboard', {
            url: '/dashboard',
            template: '<h1>dashboard</h1>'
        })
        .state('books', {
            url: '/books',
            template: '<h1> books </h1>'
        })
        .state('memebers', {
            url: '/memebers',
            template: '<h1> memebers </h1>'
        })
        .state('admin', {
            url: '/admin',
            template: '<h1> admindfdfsdf </h1>'
        });
    $urlRouterProvider.otherwise('/dashboard');
}]);
