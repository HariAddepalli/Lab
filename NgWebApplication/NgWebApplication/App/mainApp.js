var mainApp = angular.module("mainApp", ["ngRoute"]);
mainApp.config(function ($routeProvider, $compileProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        controller: "HomeController",
        templateUrl: "App/Templates/Home.html",
        controllerAs: "vm"
    })
    .otherwise({
        redirectTo: "/"
    });
    $compileProvider.debugInfoEnabled(false);
    $locationProvider.html5Mode(true);
});