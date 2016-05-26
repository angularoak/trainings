var app = angular.module("httpExample", []);

app.controller("productsDataController", function($scope,$http) {
    $scope.orderBydescAsc = true;
    function productsSucess(resultSet) {
        $scope.products = resultSet.data.value;
    };
    function productsFailed(error) {
        $scope.httpError = "Somthing Went wrong please contact Admin"
    };    $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products").then(productsSucess, productsFailed);
    $scope.sort = function(sortBy){
        $scope.sortBy=sortBy;
        $scope.orderBydescAsc=!$scope.orderBydescAsc;  
    }
   });