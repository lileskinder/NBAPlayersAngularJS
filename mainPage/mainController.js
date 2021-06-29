angular.module("NBAplayersApp").controller("MainController", MainController);

function MainController(PlayersFactory) {
    const vm = this;
    
    PlayersFactory.getPlayers()
        .then(function (response) {
            vm.players = response.data;
        })

        
}