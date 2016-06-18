define(['./module'], function (directives) {
    'use strict';
    directives.directive('sidePanel', function () {
    	var linkFn = function (scope){
		    console.log(scope);
 		};

	    return {
		    restrict: 'A',
		    replace: 'true',
		    link: linkFn,
		    templateUrl: 'views/side-panel.html'
		 };
		
    });
});
