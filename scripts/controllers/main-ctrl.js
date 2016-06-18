define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MainCtrl', ['$scope','$http','$location','getSetService', '$routeParams',
    	function ($scope,$http,$location,getSetService, $routeParams) {
    	var self = $scope, date;

    	/* Set Breadcrumb */ 
    	self.breadcrumbthreelevel = ($routeParams.sid) ? true:false;
    	if(!self.breadcrumbthreelevel) { self.breadcrumbtwolevel = ($routeParams.cid) ? true: false;	}	//show breadcrumb
    	self.cid = $routeParams.cid;
    	self.sid = $routeParams.sid;
    	
    	/* Set Post and spinner icon */
		self.posts = {}; self.showspinner = true;
		
		$http.get('post.json').success(function(data) {
	      self.posts = data;
	      self.showspinner = false;
	      getSetService.setdata(data);
	    });
		

	    self.selectPost = function(post){
	    	date = new Date(post.createdOn);
	    	$location.path('/post/'+date.getUTCMonth()+'/'+date.getUTCFullYear()+'/'+post.title);
	    };

	    self.renderHtml = function(html_code)
		{
    		return self.trustAsHtml(html_code);
		};
    }]);
});
