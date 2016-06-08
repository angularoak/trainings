app.controller("sgaReportCtrl", function($scope, userDetails, commonServices, $location, $localStorage) {
    function sucess(responce) {
        console.log("Suceesfull in getting SGA report data")
        $scope.projects = responce.data.SkilGapAnalysis;
    }

    function failure(e) {
        console.log("Failed to Fetch SGA report data")
    }
    commonServices.getSGADetails(sucess, failure);
    
    $scope.genarate = function() {
        $scope.projectInfo = JSON.parse($scope.selectedProject);
    };
});