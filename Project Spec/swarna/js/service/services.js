app.service("userDetails", function ($http, $localStorage) {
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

app.service("commonServices", function ($http, $localStorage) {
    this.getCurrentEmployeeDetails = function (success, failure) {
        $http.get("	http://localhost:8080/RestProject/restsample/employee").then(success, failure);
    };
    this.getCurrentProjects = function (success, failure) {
        $http.get("../swarna/js/data/projects.json").then(success, failure);
    };
    this.getCurrenttechnologyDetails = function (success, failure) {
        $http.get("../swarna/js/data/technologies.json").then(success, failure);
    };
    this.getSGADetails = function (success, failure) {
        $http.get("../swarna/js/data/sga.json").then(success, failure);
    };
    this.getProjectsDetails = function () {
        return $localStorage.projects;
    };
    this.setProjectsDetails = function (newProject) {
        $localStorage.projects.push(newProject);
    };

    this.createEmployee = function (newEmployee,success,failure) {
        //$localStorage.employees.push(newEmployee);
        $http.post("http://localhost:8080/RestProject/restsample/employee",newEmployee).then(success, failure);
    };
    this.getTchnologyDetails = function () {
        return $localStorage.technologies;
    };
    this.setTchnologyDetails = function (newTchnology) {
        $localStorage.technologies.push(newTchnology);
    };

})