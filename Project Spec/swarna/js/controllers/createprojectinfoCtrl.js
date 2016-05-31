app.controller("createprojectinfoCtrl", function($scope, userDetails, commonServices, $location) {
    
    
    $scope.employees = commonServices.getEmployeeDetails();
    $scope.technologies = commonServices.getTchnologyDetails();
    $scope.createProject = function() {
      commonServices.setProjectsDetails($scope.newProject);
    }
});