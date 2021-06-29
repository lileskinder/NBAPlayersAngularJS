angular.module("NBAplayersApp").factory("PlayersFactory", PlayersFactory);

function PlayersFactory($http) {
    return {
        getPlayers: getPlayers,
        getOnePlayer: getOnePlayer
    }

    function getPlayers() {
        return $http.get("https://www.balldontlie.io/api/v1/players")
            .then(complete)
            .catch(failed);
    }

    function getOnePlayer(playerId) {
        return $http.get("https://www.balldontlie.io/api/v1/players/"+playerId)
            .then(complete)
            .catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(response) {
        return response.statusText;
    }
}