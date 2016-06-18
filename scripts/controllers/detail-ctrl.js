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

    	self.disqus_config = function () {
	        this.page.url = CONFIG.DOMAIN_NAME +'/post/'+ $routeParams.month+'/'+ $routeParams.year+'/'+$routeParams.tag;
	        this.page.identifier = $routeParams.tag;
	    };

	    (function() {
	      var d = document, s = d.createElement('script');

	      s.src = '//mindstuffs.disqus.com/embed.js';

	      s.setAttribute('data-timestamp', +new Date());
	      (d.head || d.body).appendChild(s);
	    })();		

    }]);

});
