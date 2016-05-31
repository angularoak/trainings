app.controller("addTechController", function($scope,commonServices,$location, $localStorage){
    (function() {
        if($localStorage.technologies===undefined)
commonServices.getStoredTechDetails(techSuccess,techFailure);
        function techSuccess(response) {
        console.log("Success technology details");
        $localStorage.technologies = response.data.technologies;
    }

    function techFailure(error) {
        console.log("Failed to get technology details");
    }
    })();

   $scope.createNewTechnology = function() {
   commonServices.setTechDetails($scope.newTechnology);
    $scope.newTechnology= "";
    console.log("Technology created Sucessfully");
    $location.url('/home');
     }
});