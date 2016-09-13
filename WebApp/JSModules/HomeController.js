var Home = angular.module("Home",[])
Home.controller("HomeController", ["$scope", "model", function ($scope, model) {
    
    $scope.Name = "hari";
    $scope.model = model;
}]);