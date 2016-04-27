var app = angular.module("mytrail",[]);

app.controller("myController",function($scope){
    var privacyDetails={
        "Name":"Revs",
        "UserName":"Revathi",
        "Email":"revs@gmail.com",
        "Phn":"9573404670",
        "Birthday":"july-22-1993",
        "Gender":"F"
    }
    
    $scope.Name="Revs";
    $scope.privacyDetails=privacyDetails;
});
app.controller("myController2",function($scope){
    $scope.Name="Oak";
});

