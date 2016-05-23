app.controller("loginctrl", function ($scope, userDetails) {
    function login() {
        function userSuccess(responce) {
            var invalidUser = true;
            $scope.users = responce.data.users;
            angular.forEach($scope.users, function (value, key) {
                if (invalidUser) {
                    if ($scope.uname === value.userName && $scope.password === value.password) {
                        $scope.Message = "Valid User";
                        invalidUser = false;
                    } else {
                        invalidUser = true;
                        $scope.Message = "Invalid User, Please try again";
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