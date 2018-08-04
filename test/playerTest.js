const assert = require('chai').assert;
const {Player, Game} = require("../game/Game");

    describe('Player class functionality testing', function(){
        let someone;
        beforeEach(function(){
            someone = new Player(1, "Naymat");
            game = new Game();
        })

        it('Check if player is created with correct properties - name', function(){
            assert.equal(someone.getName(),"Naymat");
        })
    
        it('Check if player is created with correct properties - id', function(){
            assert.equal(someone.getId(), 1);
        })
    
        it('should add Player object to game', function(){
            game.addPlayer(someone);
            assert.isAbove(game.getPlayers().length,0);
        })

    })