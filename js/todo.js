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
    function addTask(){
        $scope.tasks.push($scope.todoTask);
        $scope.todoTask={};
    };
    $scope.tasks=tasks;
    $scope.addTask = addTask;
});