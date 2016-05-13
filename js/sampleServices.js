var app = angular.module("sampleService", []);

app.controller("serviceController", function($scope, calc) {
    $scope.name = "Oak";
    /* $scope.square =function(){
         $scope.output= $scope.number*$scope.number
     }*/
    $scope.square = function() {
        $scope.output = calc.square($scope.number)
    } 
    $scope.cube = function() {
        $scope.output = calc.cube($scope.number)
    }
    $scope.add = function() {
        $scope.output = calc.add($scope.number,"45")
    }

});