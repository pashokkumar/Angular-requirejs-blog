define(['./module'], function (directives) {
    'use strict';
    directives.directive('footer', function () {
    	var linkFn = function (scope){
		     scope.subscribe = function(){
		     };

		     scope.unsubscribe = function(){
		     };
		};    
	    return {
		    restrict: 'A',
		    replace: 'true',
		    link: linkFn,
		    templateUrl: 'views/footer.html'
		};
    });
});
