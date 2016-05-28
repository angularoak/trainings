app.controller("createprojectinfoCtrl", function($scope, userDetails, commonServices, $location) {
    
    function technologiesSucess(response) {
        console.log("Success technologies details");
        $scope.technologies = response.data.technologies;
    }

    function technologiesFailed(error) {
        console.log("Failed to get technologies detailes");
    }
    $scope.employees = commonServices.getEmployeeDetails();

    commonServices.getTechDetails(technologiesSucess, technologiesFailed);

    $scope.createProject = function() {
      commonServices.setProjectsDetails($scope.newProject);
    }
});