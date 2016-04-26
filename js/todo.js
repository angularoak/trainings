var app = angular.module("myApp",[]);

app.controller("todo",function($scope){
    var tasks=[{
    "desc":"Go to Training"
    },{
    "desc":"Learn Angular"
    },
    {
    "desc":"Complete HTML,CSS"
    }];
    function addTask(task){
       tasks.push(task);
     };
    $scope.tasks=tasks;
    $scope.addTask = addTask;
});