'use strict';

var app = angular.module('myApp', [
  'ngRoute', 
  'myApp.rental', 
  'myApp.tool', 
  'myApp.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);