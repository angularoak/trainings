var app = angular.module("sampleDirective", []);

app.directive("mySample", function() {
    return {
        restrict : "A",
        templateUrl : '../../routing/templates/home.html',
    };
});
app.directive("employeeDetails", function() {
    return {
        restrict : "E",
        template : "<h1>Get Employee Details</h1>"
    };
});