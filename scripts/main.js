/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    paths: {
        angular: '../../lib/angular/angular.min',
        'angular-route': '../../lib/angular-route/angular-route.min',
        jquery: '../../lib/jquery/dist/jquery.min',
        'rangy-core': '../../lib/rangy/rangy-core.min',
        'rangy-selectionsave': '../../lib/rangy/rangy-selectionsaverestore.min',
        'textAngular-sanitize': '../../lib/textAngular/dist/textAngular-sanitize.min',
        textAngular: '../../lib/textAngular/dist/textAngular.min',
        'requirejs-domready': '../../lib/requirejs-domready/domReady.min',
        textAngularSetup: '../../lib/textAngular/dist/textAngularSetup.min',
        bootstrap: '../../lib/bootstrap/dist/js/bootstrap.min'
    },
    waitSeconds: 0,
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        'rangy-core': {
            deps: [
                'angular'
            ]
        },
        'rangy-selectionsave': {
            deps: [
                'angular'
            ]
        },
        'textAngular-sanitize': {
            exports: 'textAngular-sanitize',
            deps: [
                'angular'
            ]
        },
        textAngularSetup: {
            exports: 'textAngularSetup',
            deps: [
                'textAngular-sanitize'
            ]
        },
        textAngular: {
            exports: 'textAngular',
            deps: [
                'textAngularSetup'
            ]
        }
    },
    deps: [
        './bootstrapMain'
    ],
    packages: [

    ]
});
require(['rangy-core', 'rangy-selectionsave'], function(rangyCore){
    'use strict';
    window.rangy = rangyCore;
});