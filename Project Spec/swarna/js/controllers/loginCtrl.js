app.controller("loginctrl", function ($scope, userDetails, $location) {
    function login() {
        function userSuccess(responce) {
            var invalidUser = true;
            $scope.users = responce.data.users;
            angular.forEach($scope.users, function (value, key) {
                if (invalidUser) {
                    if ($scope.uname === value.userName && $scope.password === value.password) {
                        $scope.Message = "Valid User";
                        invalidUser = false;
                        userDetails.setUser(value);
                        $location.url('/home');
                    } else {
                        invalidUser = true;
                        $scope.Message = "User/Password doesn't exists redirecting to login  page";
                    }
                }
            });
            /* Plain JS style            
            for (var i = 0, len = $scope.users.length; i < len; i++) {
                 if ($scope.uname === $scope.users[i].userName) {
                     console.log('Loop is going to break.');
                     break;
                 }
                 console.log('Loop will continue.');
             }*/

        };

        function userFailure(error) {
            alert("failed to load details");
        };
        userDetails.get(userSuccess, userFailure);

    };

    function reset() {
        $scope.uname = "";
        $scope.password = "";

    };
    $scope.login = login;
    $scope.reset = reset;

});