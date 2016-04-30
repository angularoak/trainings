var app = angular.module("mytrail2",[]);

app.controller("myway",function($scope){
    var users=[{
	"FirstName": "Suneel",
	"LastName": "Manyam",
    "Studies":"calcutta university",
    "University":"http://www.caluniv.ac.in/",
	
	"twitterUrl": "https://twitter.com/sunilhari9"
	
}, {
	"FirstName": "Swarna",
	"LastName": "Yenugu",
    "Studies":"london university",
    "University":"http://www.london.ac.uk/",

    "twitterUrl": "https://twitter.com/urstrulyMahesh"
}, {
	"FirstName": "Revathi",
	"LastName": "Yalamala",
    "Studies":"newyork university",
    "University":"http://www.nyu.edu/",
	
    "twitterUrl": "https://twitter.com/ssrajamouli"
}]
    
    $scope.userName="Suneel";
    $scope.users=users;
});