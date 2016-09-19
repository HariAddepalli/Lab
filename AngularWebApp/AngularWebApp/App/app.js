'use strict';
angular.module('app', ['ngAnimate', 'ngRoute']);

angular.module("app").config(["$routeProvider",function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "App/Views/Home.html",
        controller: "HomeController"
    })

    $routeProvider.otherwise("/");
}]);