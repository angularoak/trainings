var app = angular.module("httpExample", []);

app.controller("productsDataController", function($scope,$http) {
    function productsSucess(resultSet) {
        $scope.products = resultSet.data.value;
    };
    function productsFailed(error) {
        $scope.httpError = "Somthing Went wrong please contact Admin"
    };    $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products").then(productsSucess, productsFailed);
   });