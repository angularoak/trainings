app.controller("sgaReportCtrl",function($scope, userDetails, commonServices, $location,$localStorage){  
    $scope.projects =  $localStorage.sga;
    $scope.genarate = function(){
        $scope.projectInfo=JSON.parse($scope.selectedProject);
    };
});