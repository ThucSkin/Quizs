
var app = angular.module("myApp",[]);
app.controller("subjectCtrl", function($scope, $http){
	$scope.list_Subject = [];
	$http.get('db/Subject.js').then(function(reponse){
			$scope.list_Subject = reponse.data;
	})
});