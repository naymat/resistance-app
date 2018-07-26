const assert = require('chai').assert;
var Player = require("../game");

const someone = new Player(1, "Naymat");

describe('Game', function (){
    it('Check if player is created with correct properties - name', function(){
        assert.equal(someone.getName(),"Naymat");
    })
    it('Check if player is created with correct properties - id', function(){
        assert.equal(someone.getName(), 1);
    })

    it('game')
})

