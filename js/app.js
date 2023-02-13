var app = angular.module('myapp',[]):

app.derective('quizflopy', function(){
	return {
		restrict : 'AE',
		scope:{},
		templateUrl:'template-quiz,html',
		link: function(scope, elem, attrs){
			scope.start = function(){
				scope.inProgess = true;
			};
			scope.reset = function(){
				scope.inProgess = false;
			};
			scope.getQuestion = function(){
				scope.question = 
			}
			scope.reset();
		}
	}
})