'use strict';

angular.module('myApp.tool.tool-directive', [])

.directive('tool', function() {
    return {
        restrict: "E",
        template: "<div>I am a tool directive</div>"
    }
});



