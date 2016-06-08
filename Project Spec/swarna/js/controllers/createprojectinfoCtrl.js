app.controller("createprojectinfoCtrl", function($scope, userDetails, commonServices, $location) {
    commonServices.getCurrentEmployeeDetails(empSucess, empFailure);

    function empSucess(response) {
        console.log("Success Projects details");
        $scope.employees = response.data.employees;
    }

    function empFailure(error) {
        console.log("Failed to get Projects details");
    }

    //$scope.employees = commonServices.getEmployeeDetails();
    $scope.technologies = commonServices.getTchnologyDetails();
    $scope.createProject = function() {
        commonServices.setProjectsDetails($scope.newProject);
    }
});