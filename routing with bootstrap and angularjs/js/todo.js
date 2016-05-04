var app = angular.module("myApp",[]);

app.controller("todo",function($scope){
    var tasks=[];
    function addTask(){
        $scope.errortext = "";
        if (JSON.stringify($scope.tasks).indexOf($scope.todoTask.desc) == -1) {
            $scope.tasks.push($scope.todoTask);
        } else {
            $scope.errortext = "The Task is already in your Todo List.";
        }       
        
        $scope.todoTask={};
    };

    $scope.tasks=tasks;
    $scope.addTask = addTask;
});