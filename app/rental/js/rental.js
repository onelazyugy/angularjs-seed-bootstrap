'use strict';

angular.module('myApp.rental', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rental', {
    templateUrl: 'rental/view/rental.html',
    controller: 'rentalCtrl'
  });
}]);