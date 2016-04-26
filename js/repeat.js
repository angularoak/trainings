var app = angular.module("repeatExample",[]);

app.controller("userDetails",function($scope,$http){

    $http.get("http://www.w3schools.com/angular/customers.php").then(function (response) {
        $scope.persons = response.data.records;
    });
    $scope.userName="Suneel";

});