app.service("userInformation", function($http,$localStorage) {
    var user = {};
    this.get = function(success, failure) {
        $http.get("data/userinfo.json").then(success, failure);
    };
    this.setUser = function (val) {
        this.user = val;
    };
    this.getUser = function (val) {
        return this.user
    };

})

app.service("commonServices", function ($http,$localStorage) {
    this.getStoredEmployeeDetails = function (success, failure) {
        $http.get("data/employe-info.json").then(success, failure);
    };
    this.getStoredProjectsDetails = function (success, failure) {
        $http.get("data/project.json").then(success, failure);
    };
    this.getStoredTechDetails = function (success, failure) {
        $http.get("data/technology.json").then(success, failure);
    };
this.getProjectsDetails = function() {
        return $localStorage.projects;
    };
    this.setProjectsDetails = function(newProject) {
        $localStorage.projects.push(newProject);
    };
    
    this.getEmployeeDetails  = function() {
        return $localStorage.employees;
    };
    this.setEmployeeDetails = function(newEmployee) {
        $localStorage.employees.push(newEmployee);
    };
    this.getTechDetails = function () {
        return $localStorage.technologies;
    };
    this.setTechDetails = function(newTechnology) {
        $localStorage.technologies.push(newTechnology);
        
    };
    
})

