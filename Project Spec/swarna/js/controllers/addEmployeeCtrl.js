app.controller("addEmployeeCtrl",function($scope,commonServices,$localStorage){
    (function(){
        if($localStorage.employees===undefined)
        commonServices.getCurrentEmployeeDetails(empSucess,empFailure);
        function empSucess(response) {
            console.log("Success Projects details");
            $localStorage.employees = response.data.employees;
        }

        function empFailure(error) {
            console.log("Failed to get Projects details");
        }
    })();
    $scope.addEmployee = function(){
        
      commonServices.setEmployeeDetails($scope.newEmployee);
    }
    
});