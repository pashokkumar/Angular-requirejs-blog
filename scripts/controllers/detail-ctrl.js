define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('DetailCtrl', ['$scope', '$http', '$routeParams','getSetService','CONFIG', 
    	function ($scope, http, $routeParams, getSetService, CONFIG) {
    	var self = $scope;
    	self.showspinner = true;
    	
    	http.get('post.json').success(function(data) {
	      self.post = data[0];
	      self.showspinner = false;	      
	    });
    }]);

});
