app.controller("createProjController", function($scope, userInformation,commonServices, $location,$localStorage ){
    
    $scope.employees = commonServices.getEmployeeDetails();
    $scope.technologies = commonServices.getTechDetails();
    $scope.createNewProject = function() {
    commonServices.setProjectsDetails($scope.newProject);
    $scope.newProject= "";
    console.log("Project created Sucessfully");
    $location.url('/home');
    }
});