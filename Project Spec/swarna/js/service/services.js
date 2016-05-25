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

app.service("commonServices", function ($http) {
    this.getEmployeeDetails = function (success, failure) {
        $http.get("../swarna/js/data/employee.json").then(success, failure);
    };
    this.getProjectsDetails = function (success, failure) {
        $http.get("../swarna/js/data/projects.json").then(success, failure);
    };
    this.getTechDetails = function (success, failure) {
        $http.get("../swarna/js/data/technologies.json").then(success, failure);
    };

})