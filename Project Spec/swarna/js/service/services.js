app.service("userDetails", function($http) {
    this.get = function(success,failure) {
        $http.get("../swarna/js/data/users.json").then(success, failure);
    };

})