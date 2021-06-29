angular.module("NBAplayersApp", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "mainPage/main.html",
        controller: "MainController",
        controllerAs: "mainCtrl"
    }).when("/:playerId", {
        templateUrl: "playerPage/player.html",
        controller: "PlayerController",
        controllerAs: "playerCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}