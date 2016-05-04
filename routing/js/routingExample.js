var app = angular.module("routingExample",['ngRoute']);
app.config(
  function($routeProvider) {
    $routeProvider.
     when('/about', {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsController'
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }).
    when('/contact', {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactController'
      }).when('/orders', {
        templateUrl: 'templates/orders.html',
        controller: 'ordersController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  });
app.controller("homeController",function($scope){
    $scope.Message="Home Page"
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
