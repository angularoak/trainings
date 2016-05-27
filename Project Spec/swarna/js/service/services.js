app.service("userDetails", function ($http,$localStorage) {
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

app.service("commonServices", function ($http,$localStorage) {
    this.getEmployeeDetails = function (success, failure) {
        $http.get("../swarna/js/data/employee.json").then(success, failure);
    };
    this.getProjectsDetails = function() {
        return $localStorage.projects;
    };
    this.setProjectsDetails = function(newProject) {
        $localStorage.projects.push(newProject);
    };
    
    this.getTechDetails = function (success, failure) {
        $http.get("../swarna/js/data/technologies.json").then(success, failure);
    };
    

})