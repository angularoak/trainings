var app = angular.module("http_example",[]);

app.controller("OrderDetails",function($scope,$http){
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
    $scope.searchHear = searchHearFunction;
    $scope.getDetailsOfProduct= function(value){
        $scope.CustName= value.CustomerID
    }
    
    
    $scope.ButtonClick = function () {
            $scope.Message = " sorted....."
        }
});