const assert = require('chai').assert;
const {Player, Game} = require("../game/Game");
const Mission = require("../game/Mission");

describe.only('Game - missons test', function (){
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

    it('Should return 2 for 1st round of 5 player game', function(){
        mission = new Mission(5);

        assert.equal(mission.numberOfPlayersForMission(1,5),2);
    })
    it('Should return 3 for 5th round of 5 player game', function(){
        mission = new Mission(5);

        assert.equal(mission.numberOfPlayersForMission(5,5),3);
    })
    it('Should return true since 3 accept votes vs 2 reject votes(5 player game)', function(){
        mission = new Mission(5);    

        votes = [true,true,false,true,false];
        mission.addVotes(votes);

        assert.equal(mission.evaluateVotes(),true);
    })
    

   
})

