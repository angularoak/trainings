app.controller("loginController", function($scope, userInformation, $location, $localStorage,commonServices) {
    function login() {
        function userSuccess(responce) {
            var invalidUser = true;
            $scope.users = responce.data.users;
            angular.forEach($scope.users, function(value, key) {
                if (invalidUser) {
                    if ($scope.uname === value.userName &&
                        $scope.pwd === value.password) {
                        $scope.Message = "Valid User";
                        invalidUser = false;
                        userInformation.setUser(value);
                        storeDataInLocalStorage();                       
                        $location.url('/home');
                    } else {
                        invalidUser = true;
                         $scope.Message = "User/Password doesn't exists";
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
      function storeDataInLocalStorage(){
      function projectSucess(response) {
      console.log("Success Projects details");
      $localStorage.projects = response.data.projects;
        }
      function projectFailed(error) {
      console.log("Failed to get Projects details");
        }
      commonServices.getStoredProjectsDetails(projectSucess, projectFailed);
    }
    $scope.login = login;
    $scope.reset = reset;

});