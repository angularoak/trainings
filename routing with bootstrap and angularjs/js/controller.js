var app = angular.module("Controllar",[]);

app.controller("MainController",function($scope){
    var person={
        "FirstName":"Suneel",
        "LastName":"Manyam",
        "imageUrl":"https://goo.gl/56lHky"
    }
    
    $scope.userName="Suneel";
    $scope.person=person;
});

app.controller("SecondaryController",function($scope){
    $scope.userName="Oak";
});