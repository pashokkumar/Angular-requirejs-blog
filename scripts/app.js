define([
    'angular',
    'angular-route',
    'textAngular',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute',
        'textAngular'
    ]).constant('CONFIG', {
        'SERVER_URL': document.domain,
        'DOMAIN_NAME': document.domain
    });
});