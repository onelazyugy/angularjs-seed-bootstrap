'use strict';

angular.module('myApp.tool.tool-filter', [])

.filter('reverse', function() {
  return function(text) {
    return text.split("").reverse().join(""); 
  };
});