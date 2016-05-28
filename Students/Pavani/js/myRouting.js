var app = angular.module("routingExample", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        }).when('/aboutus', {
            templateUrl: 'templates/about.html',
            controller: 'aboutController'
        })
});
app.controller("homeController",function($scope){
     $scope.pageTitle="Home page";
})
app.controller("aboutController",function($scope){
     $scope.pageTitle="Aboutus page";
})