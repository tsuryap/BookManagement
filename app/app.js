angular.module('common', []);
var app = angular.module('bookmgmt', ['ui.router', 'common', 'ngMessages', 'ui.grid']);
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
            templateUrl: 'app/components/book/bookmain.html'
        })
        .state('memebers', {
            url: '/memebers',
            template: '<h1> memebers </h1>'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/components/admin/main.html'
        })
        .state('admin.addBook', {
            url: '/addBook',
            views: {
                'admin': {
                    templateUrl: 'app/components/admin/addBook/addBook.html'
                }
            }
        })
        .state('admin.addMember', {
            url: '/addMember',
            views: {
                'admin': {
                    templateUrl: 'app/components/admin/addMember/addMember.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/dashboard');
}]);
