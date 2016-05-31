var app = angular.module('servicesApp',[]);
app.controller("servicesController",function($scope,employee){
     $scope.getFullName= function(){
        $scope.FullName = 
            employee.getFullName($scope.firstName, $scope.lastName);
    }; 
    $scope.greetEmployee= function(){
        $scope.Greetings = 
            employee.greetToEmployee($scope.firstName, $scope.lastName);
    };
});

//Services Example
app.service("employee",function(){
    this.getFullName=function(fName,lName){
        return fName + " " + lName;      
    };
    this.greetToEmployee =function(fName,lName){
        return "Hello, " +fName + " " + lName;   
    }
})