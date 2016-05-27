app.controller("createprojectinfoCtrl", function($scope, userDetails, commonServices, $location) {
    function employeeSucess(response) {
        console.log("Success employee details");
        $scope.employees = response.data.employees;
    }

    function employeeFailed(error) {
        console.log("Failed to get employee details");
    }

    function technologiesSucess(response) {
        console.log("Success technologies details");
        $scope.technologies = response.data.technologies;
    }

    function technologiesFailed(error) {
        console.log("Failed to get technologies detailes");
    }
    commonServices.getEmployeeDetails(employeeSucess, employeeFailed);

    commonServices.getTechDetails(technologiesSucess, technologiesFailed);

    $scope.createProject = function() {
      commonServices.setProjectsDetails($scope.newProject);
    }
});