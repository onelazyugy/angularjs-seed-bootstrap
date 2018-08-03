angular.module("myApp.tool").controller("toolCtrl", ["$scope", "toolService", function($scope, toolService){
    $scope.message = "I am a variable from tool controller";
    $scope.tools = toolService.getTools();

    $scope.addTool = function () {
        var tool = {
            name: $scope.toolName,
            price: 9.99
        }
        console.log('add tool:', tool);
        toolService.addTool(tool);
    }
}]);