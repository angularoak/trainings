var app = angular.module('webApp',[]);
    app.service("userInformation", function($http) {
    this.get = function(success,failure) {
        $http.get("../../dummy data/userinfo.json").then(success, failure);
    };

})