var app = angular.module("routingExample",['ngRoute','myApp','http','repeatExample','Controllar','localStorage']);
app.config(
  function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'navlinks/home.html',
        controller: 'homeController'
      }).
     when('/controller', {
        templateUrl: 'navlinks/controller.html',
        controller: 'controllerController'
      }).    
    when('/http', {
        templateUrl: 'navlinks/http.html',
        controller: 'httpController'
      }).
    when('/localStorage', {
        templateUrl: 'navlinks/localStorage.html',
        controller: 'localStorageController'
      }).
    when('/modelExample', {
        templateUrl: 'navlinks/modelExample.html',
        controller: 'modelExampleController'
      }).
    when('/ngReaptExample', {
        templateUrl: 'navlinks/ngReaptExample.html',
        controller: 'ngReaptExampleController'
      }).
    when('/todo', {
        templateUrl: 'navlinks/todo.html',
        controller: 'todoController'
         
      }).
      otherwise({
        redirectTo: '/home'
      });
   });

app.controller("homeController",function($scope){
   // $scope.Message="Home Page"
});


app.controller("controllerController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("httpController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("localStorageController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("modelExampleController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("ngReaptExampleController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("todoController",function($scope){
   // $scope.Message="Home Page"
});
      
       
