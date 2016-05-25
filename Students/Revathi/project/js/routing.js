var app = angular.module("webApp", ['ngRoute']);

app.config(
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'tempaltes/home.html',
            controller: 'homeController'
        }).
        when('/login', {
            templateUrl: 'tempaltes/login.html',
            controller: 'loginController'
        }).
        when('/addEmployee', {
            templateUrl: 'tempaltes/addEmployee.html',
            controller: 'addEmpController'
        }).
        when('/addTechnology', {
            templateUrl: 'tempaltes/addTechnology.html',
            controller: 'addTechController'
        }).
        when('/createProject', {
            templateUrl: 'tempaltes/createProject.html',
            controller: 'createProjController'
        }).
        when('/sga', {
            templateUrl: 'tempaltes/sga.html',
            controller: 'sgaController'
        }).
        otherwise({
            redirectTo: '/login'
        });
    });