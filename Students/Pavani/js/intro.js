/*Module Cretion*/
var sampleApp = angular.module("myApp",[]);

/*Controller creation*/
sampleApp.controller("studentDetails",function($scope){
    $scope.firstName="Pavani";
    $scope.lastName= "Jakka";
    $scope.getFullName= function(){
        alert($scope.firstName + " " + $scope.lastName);
    };
});
