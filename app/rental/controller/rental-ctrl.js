angular.module("myApp.rental").controller("rentalCtrl", ["$scope", "toolService", function($scope, toolService){
    $scope.title = "Tool For Rent";
    $scope.tools = toolService.getTools().length === 0 ? 'No tool available' : toolService.getTools();
}]);