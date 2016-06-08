app.controller("createSgaCtrl",function($scope, userDetails, commonServices, $location,$localStorage){
(function(){
        if($localStorage.sga===undefined)
        commonServices.getSGADetails(sgaSucess,sgaFailure);
        function sgaSucess(response) {
            console.log("Success SGA details");
            $localStorage.sga = response.data.SkilGapAnalysis;
        }

        function sgaFailure(error) {
            console.log("Failed to get SGA details");
        }
    })();
     
    function sucess(responce) {
        console.log("Suceesfull in getting SGA report data")
        $scope.projects = responce.data.SkilGapAnalysis;
    }

    function failure(e) {
        console.log("Failed to Fetch SGA report data")
    }
    commonServices.getSGADetails(sucess, failure);
    $scope.genarate = function(){
        $scope.projectInfo=JSON.parse($scope.selectedProject);
    };
    $scope.saveSGA = function(){
        console.log("SGA object need to be updated")
    }
});