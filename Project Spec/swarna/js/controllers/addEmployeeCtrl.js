app.controller("addEmployeeCtrl", function($scope, commonServices, $localStorage) {

    $scope.addEmployee = function() {
        commonServices.createEmployee($scope.newEmployee, sucess, failure);
    }

    function sucess() {
        alert("Created");
    }

    function failure() {
        alert("Something went wrong");
    }

});