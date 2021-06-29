angular.module("NBAplayersApp").controller("PlayerController", PlayerController);

function PlayerController($routeParams, PlayersFactory) { 
    const vm = this;
    const playerId = $routeParams.playerId;

    PlayersFactory.getOnePlayer(playerId)
        .then(function (response) {
            console.log(response);
            vm.players = response.data[0];
        });
}