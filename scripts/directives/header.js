define(['./module'], function (directives) {
    'use strict';
    directives.directive('header', [function () {
    	var linkFn = function (scope){
		    scope.titlename = "My Blog";		    
 		};

		

	    return {
		    restrict: 'A',
		    replace: 'true',
		    link: linkFn,
		    templateUrl: 'views/header.html'
		 };
		
    }]);
});
