angular.module("myApp.rental").controller("rentalCtrl", ["$scope", "toolService", function($scope, toolService){
    $scope.rental = "I am a rental page";
    $scope.tools = toolService.getTools();
}]);