/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/category/:cid', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/category/:cid/:sid', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/post/:month/:year/:tag',{
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactUsCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about-us.html',
            controller: 'AboutUsCtrl'
        })
        .when('/privacy', {
            templateUrl: 'views/privacy-policy.html',
            controller: 'PrivacyPolicyCtrl'
        })
        .when('/copyright', {
            templateUrl: 'views/copyright-policy.html',
            controller: 'CopyrightPolicyCtrl'
        })
        .when('/archives', {
            templateUrl: 'views/archives.html',
            controller: 'ArchivesCtrl'
        })
        .when('/addpost', {
            templateUrl: 'views/add-post.html',
            controller: 'AddPostCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


        //check browser support
        if(window.history && window.history.pushState){ /* For not to add hash in route */
            $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
            });
        }
    }]);
});
