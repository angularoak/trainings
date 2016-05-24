app.controller("homeController", function ($scope, userDetails, $location) {
    $scope.user = userDetails.getUser();
});