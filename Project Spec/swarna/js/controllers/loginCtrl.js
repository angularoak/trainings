app.controller("loginctrl", function($scope,userDetails) {
    function login() {
        function userSuccess(responce) {
            $scope.users = responce.data.users;
            
        };

        function userFailure(responce) {
            alert("failed to load details");
        };
        userDetails.get(userSuccess,userFailure);

    };

    function reset() {
        $scope.uname = "";
        $scope.password = "";

    };
    $scope.login = login;
    $scope.reset = reset;

});