'use strict';

angular.module('myApp.tool.tool-directive', [])

.directive('toolList', [function() {
    return {
        restrict: "E",
        scope: {
            tools: "="
        },
        templateUrl: "tool/directive/tool-list.html",
        controller: function($scope) {
            $scope.title = "Available Tools";
        },
        transclude: true,
        replace: true
        
    }
}]);



