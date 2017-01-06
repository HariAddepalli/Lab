var mainApp = angular.module("mainApp", ["ui.router"]);
mainApp.config(function ($stateProvider, $compileProvider, $locationProvider, $urlRouterProvider, $qProvider) {
    $urlRouterProvider.otherwise("/home")
    $stateProvider
    .state("home", {
        url: "/",
        controller: "HomeController",
        templateUrl: "App/Templates/Home.html",
        controllerAs: "vm"
    })
    .state("home.left", {
        url: "/left",
        template: "<div>Menu content<div>",
        controllerAs: "vm"
    })
    .state("home.right", {
        url: "/right",
        template: "<div> home content </div>",
        controllerAs: "vm"
    })

    $compileProvider.debugInfoEnabled(false);
    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
});