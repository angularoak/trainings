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
        }).when('/newEmployee', {
            templateUrl: 'tempaltes/addEmployee.html'
            , controller: 'addEmployeeCtrl'
        }).
        when('/newTechnologie', {
            templateUrl: 'tempaltes/newTechnology.html'
            , controller: 'addTechCtrl'
        }).
        when('/CreateProjectinformation', {
            templateUrl: 'tempaltes/createprojectinfo.html'
            , controller: 'createprojectinfoCtrl'
        }).
        when('/createSga', {
            templateUrl: 'tempaltes/createSga.html'
            , controller: 'createSgaCtrl'
        }).
        when('/sgaReport', {
            templateUrl: 'tempaltes/sgaReport.html'
            , controller: 'sgaReportCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
    });