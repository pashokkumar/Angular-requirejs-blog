define(['./module'], function (filters) {
    'use strict';

    filters.filter('limitHtml', [function () {
    	return function(text, limit){
	        var changedString = String(text).replace(/<[^>]+>/gm, '');
	        var length = changedString.length;

	        return length > limit ? changedString.substr(0, limit - 1)+'...' : changedString; 
    	};
    }]);
});
