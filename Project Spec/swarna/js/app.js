var app = angular.module("sgaApp", ['ngRoute']);

app.config(
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'tempaltes/home.html'
            , controller: 'homeController'
        }).
        when('/login', {
            templateUrl: 'tempaltes/login.html'
            , controller: 'loginctrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
    });