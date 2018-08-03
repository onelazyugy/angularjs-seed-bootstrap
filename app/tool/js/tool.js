'use strict';

angular.module('myApp.tool', [
  'ngRoute',
  'myApp.tool.tool-directive',
  'myApp.tool.tool-filter'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tool', {
    templateUrl: 'tool/view/tool.html',
    controller: 'toolCtrl'
  });
}])
.controller('toolCtrl', ['$scope', function($scope) {
    $scope.tool = "I am a tool page";
}]);