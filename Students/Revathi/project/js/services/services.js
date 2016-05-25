app.service("userInformation", function($http) {
    this.get = function(success, failure) {
        $http.get("data/userinfo.json").then(success, failure);
    };

})