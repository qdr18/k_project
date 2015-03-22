'use strict';

/**
 * @ngdoc function
 * @name kProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kProjectApp
 */
angular.module('kProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
