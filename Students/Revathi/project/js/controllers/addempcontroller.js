app.controller("addEmpController", function($scope,commonServices,$location, $localStorage){
    (function() {
        if($localStorage.employees===undefined)
commonServices.getStoredEmployeeDetails(employeeSuccess,employeeFailure);
        function employeeSuccess(response) {
        console.log("Success employee details");
        $localStorage.employees = response.data.employees;
    }

    function employeeFailure(error) {
        console.log("Failed to get employee details");
    }
    })();

   $scope.createNewEmployee = function() {
   commonServices.setEmployeeDetails($scope.newEmployee);
    $scope.newEmployee= "";
    console.log("Employee created Sucessfully");
    $location.url('/home');
     }
});