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
        template : "<h1>Get Student Details</h1>"
    };
});

app.directive('student', function() {
    //define the directive object
    var directive = {};

    //restrict = E, signifies that directive is Element directive
    directive.restrict = 'E';

    //scope is used to distinguish each student element based on criteria.
    directive.scope = {
        student : "=name"
    }

    //template replaces the complete element with its text. 
    directive.template = "Student: <b>{{student.name}}</b>";

    //compile is called during application initialization. AngularJS calls it once when html page is loaded.

    directive.compile = function(element, attributes) {
        element.css("border", "1px solid #cccccc");

        //linkFunction is linked with each element with scope to get the element specific data.
        var linkFunction = function($scope, element, attributes) {
            element.css("background-color", "#ff00ff");
        }
        return linkFunction;
    }
    return directive;
});

app.controller('StudentController', function($scope) {
    $scope.Mahesh = {};
    $scope.Mahesh.name = "Mahesh Babu";

    $scope.Suresh = {};
    $scope.Suresh.name = "Suresh Babu";

});

