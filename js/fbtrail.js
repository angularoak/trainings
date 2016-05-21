var app = angular.module("fbEx",[]);

app.controller("myway",function($scope){
    var friends=[{
    "imageUrl":"https://goo.gl/w7bvXE",
	"FirstName": "Dharma",
	"LastName": "Teja",
    "Studies":"calcutta university",
    "University":"http://www.caluniv.ac.in/",
	
	
}, {
    "imageUrl":"https://goo.gl/Eaz7qJ",
	"FirstName": "Swarna",
	"LastName": "Yenugu",
    "Studies":"london university",
    "University":"http://www.london.ac.uk/",

}, {
     "imageUrl":"https://goo.gl/LXkWpV",
	"FirstName": "Revathi",
	"LastName": "Yalamala",
    "Studies":"newyork university",
    "University":"http://www.nyu.edu/",
	
}]
    
    $scope.userName="Suneel";
    $scope.friends=friends;
});