const assert = require('chai').assert;
const {Player, Game} = require("../game/Game");

describe('Game - missons test', function (){
    let game = null;

    beforeEach(function(){
        game = new Game();

        players = [];

        players.push(new Player(1,"Naymat"));
        players.push(new Player(2,"Bill"));
        players.push(new Player(3,"Rob"));
        players.push(new Player(4,"Bert"));
        players.push(new Player(5,"Ernie"));

        game.addMultiplePlayers(players);
        game.assignRoles();
    })

    it('should create mission team of 2 people', function(){
        missionPlayers = [];
        console.log(game.getPlayers());

        // missionPlayers.push(game.playerList[0]);
        // missionPlayers.push(game.playerList[1]);

    
        // game.createMission();

        // assert(missionPlayers.length, 2);
        // assert(missionPlayers[0], game.playerList[0]);
        // assert(missionPlayers[1], game.playerList[1]);
    })

   
})

