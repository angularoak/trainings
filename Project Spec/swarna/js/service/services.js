app.service("userDetails", function ($http) {
    var user = {};
    this.get = function (success, failure) {
        $http.get("../swarna/js/data/users.json").then(success, failure);
    };

    this.setUser = function (val) {
        this.user = val;
    };
    this.getUser = function (val) {
        return this.user
    };

})