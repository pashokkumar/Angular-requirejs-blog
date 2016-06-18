define(['./module'], function (directives) {
    'use strict';
    directives.directive('spinner', function () {
    	var linkFn = function (scope){
		    console.log(scope);
 		};
 		
	    return {
		    restrict: 'A',
		    replace: 'true',
		    link: linkFn,
		    templateUrl: 'views/spinner.html'
		 };
		
    });
});
