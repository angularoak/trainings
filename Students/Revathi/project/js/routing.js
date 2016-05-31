var app = angular.module("webApp", ['ngRoute',"ngStorage"]);

app.config(
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        }).
        when('/addEmployee', {
            templateUrl: 'templates/addEmployee.html',
            controller: 'addEmpController'
        }).
        when('/addTechnology', {
            templateUrl: 'templates/addTechnology.html',
            controller: 'addTechController'
        }).
        when('/CreateProjectinfo', {
            templateUrl: 'templates/createProject.html',
            controller: 'createProjController'
        }).
        when('/createSga', {
            templateUrl: 'templates/sga.html',
            controller: 'sgaController'
        }).
        otherwise({
            redirectTo: '/login'
        });
    });