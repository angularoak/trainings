var app = angular.module("routingExample",['ngRoute']);
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

app.controller("homeController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("homeController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("homeController",function($scope){
   // $scope.Message="Home Page"
});

app.controller("homeController",function($scope){
   // $scope.Message="Home Page"
});
app.controller("ordersController",function($scope,$http){
    $scope.Message="List of Orders";
    $scope.myorderby = function(value){
        alert(value);
    }
    function Sucess(response) {
    $scope.orders = response.data.value;
    };
   function faliure(error){
       $scope.httpError="Somthing Went wrong please contact Admin"
   }; 
    $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Orders").then(Sucess,faliure);
  
    
});
app.controller("aboutUsController",function($scope){
    $scope.Message="About us  Page"
});
app.controller("contactController",function($scope){
    $scope.Message="Contact us  Page"
});
