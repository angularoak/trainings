app.controller("createProjController", function($scope, userInformation,commonServices, $location){
    
    (function() {
        if($localStorage.projects===undefined)
commonServices.getStoredProjectsDetails(projectSuccess,projectFailure);
        function projectSuccess(response) {
        console.log("Success project details");
        $localStorage.projects = response.data.projects;
    }

    function projectFailure(error) {
        console.log("Failed to get project details");
    }
    })();
     $scope.employees = commonServices.getEmployeeDetails();

    $scope.createNewProject = function() {
  commonServices.setProjectsDetails($scope.newProject);
     }
});