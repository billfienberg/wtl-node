'use strict';

/**
 * @ngdoc function
 * @name wtlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wtlApp
 */
angular.module('wtlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
