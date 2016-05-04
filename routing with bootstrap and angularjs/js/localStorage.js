var app = angular.module("localStorage",["ngStorage"]);
//http://www.allaboutrajni.com/
app.controller("todo",function($scope,$localStorage, $sessionStorage){
    
    if($localStorage.tasks==undefined)
    $localStorage.tasks=[];
    
      function addTask(){       
            $scope.tasks.push($scope.todoTask);
            $localStorage.tasks=$scope.tasks;
          $scope.todoTask={};
        };

    $scope.tasks=$localStorage.tasks;
    $scope.addTask = addTask;
});