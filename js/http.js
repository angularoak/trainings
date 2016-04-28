var app = angular.module("http",[]);

app.controller("productsDetails",function($scope,$http){
function Sucess(response) {
    $scope.products = response.data.value;
    };
   function faliure(error){
       $scope.httpError="Somthing Went wrong please contact Admin"
   };
   
    $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products").then(Sucess,faliure);
     /*var productsDetails=$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products");
    productsDetails.success(Sucess);
    productsDetails.error(faliure);
    
$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products").success(Sucess).error(faliure);*/

});