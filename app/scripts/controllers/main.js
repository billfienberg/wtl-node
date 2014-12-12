'use strict';

/**
 * @ngdoc function
 * @name wtlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wtlApp
 */
angular.module('wtlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
