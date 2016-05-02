var app = angular.module("http",[]);

app.controller("ordersDetails",function($scope,$http){
function Sucess(response) {
    $scope.orders = response.data.value;
    };
   function faliure(error){
       $scope.httpError="Somthing Went wrong please contact Admin"
   };
   
    $http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Orders").then(Sucess,faliure);
    
    function searchHearFunction(value){
        console.log(value.CustomerID);
        }
     function myorderby(value1){
       $scope.flag=true;
       $scope.myorderby=function(){
           $scope.flag=!$scope.flag;
       }}
  
     /*var productsDetails=$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products");
    productsDetails.success(Sucess);
    productsDetails.error(faliure);
    
$http.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products").success(Sucess).error(faliure);*/

});