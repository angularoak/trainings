app.controller("homeController", function ($scope, userInformation, $location) {
    $scope.user = userInformation.getUser();
});