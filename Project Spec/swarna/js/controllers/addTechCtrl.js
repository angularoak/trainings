app.controller("addTechCtrl", function ($scope, commonServices, $localStorage) {
    (function () {
        if ($localStorage.technologies === undefined)
            commonServices.getCurrenttechnologyDetails(techSucess, techFailure);

        function techSucess(response) {
            console.log("Success Projects details");
            $localStorage.technologies = response.data.technologies;
        }

        function techFailure(error) {
            console.log("Failed to get Projects details");
        }
    })();
    $scope.addTechnology = function () {

        commonServices.setTchnologyDetails($scope.newTchnology);
    }

});