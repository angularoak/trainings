var app = angular.module("repeatExample",[]);

app.controller("userDetails",function($scope){
    var persons=[{
	"FirstName": "Suneel",
	"LastName": "Manyam",
	"imageUrl": "https://goo.gl/56lHky",
	"twitterUrl": "https://twitter.com/sunilhari9"
	
}, {
	"FirstName": "Swarna",
	"LastName": "Yenugu",
	"imageUrl": "https://goo.gl/56lHky",
    "twitterUrl": "https://twitter.com/urstrulyMahesh"
}, {
	"FirstName": "Revathi",
	"LastName": "Yalamala",
	"imageUrl": "https://goo.gl/56lHky",
    "twitterUrl": "https://twitter.com/ssrajamouli"
}]
    
    $scope.userName="Suneel";
    $scope.persons=persons;
});