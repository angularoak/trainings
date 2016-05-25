app.controller("loginController", function($scope, userInformation) {
    function login() {
        function userSuccess(responce) {
            var invalidUser = true;
            $scope.users = responce.data.users;
            angular.forEach($scope.users, function(value, key) {
                if (invalidUser) {
                    if ($scope.uname === value.userName &&
                        $scope.pwd === value.password) {

                        alert("valid");
                        invalidUser = false;
                    } else {
                        alert("invalid");
                        invalidUser = true;
                    }
                }
            });
        };

        function userFailure(error) {
            alert("failed");
        }
        userInformation.get(userSuccess, userFailure);
    };

    function reset() {
        $scope.uname = "";
        $scope.pwd = "";
    };
    $scope.login = login;
    $scope.reset = reset;

});