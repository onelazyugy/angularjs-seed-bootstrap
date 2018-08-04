'use strict';

angular.module('myApp.tool.tool-directive', [])

.directive('toolList', [function() {
    return {
        restrict: "E",
        scope: {
            tools: "="
        },
        templateUrl: "tool/directive/tool-list.html",
        controller: ["$scope", "toolService",
            function($scope, toolService) {
                $scope.title = "Available Tools";
                $scope.remove = function(id) {
                    toolService.removeTool(id);
                }
            }
        ],
        transclude: true,
        replace: true
        
    }
}])
.directive('toolAdd', [function() {
    return {
        restrict: "E",
        scope: {

        }
    }
}]);



