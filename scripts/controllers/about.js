define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name blogApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the blogApp
   */
  angular.module('blogApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
