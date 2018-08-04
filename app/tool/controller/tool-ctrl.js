angular.module("myApp.tool").controller("toolCtrl", ["$scope", "toolService", function($scope, toolService){
    $scope.tools = toolService.getTools();
    $scope.title = "Add Tool";
    $scope.addTool = function () {
        var tool = {
            name: $scope.toolName,
            price: 9.99
        }
        toolService.addTool(tool);
    }
}]);