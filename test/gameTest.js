const assert = require('chai').assert;
const {Player, Game} = require("../game");

describe('Game', function (){
    let game;

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

    describe('Test if game can start and role assignment for multiple players', () =>{
        let players,numberOfSpies,numberOfResistanceMembers = null;

        let checkRoles = function(player){
            if(player.getRole() === 'Spy'){
                numberOfSpies += 1;
            }
            else{
                numberOfResistanceMembers += 1;
            }
        }
        
        beforeEach(function(){
            game = new Game();

            players = [];

            players.push(new Player(1,"Naymat"));
            players.push(new Player(2,"Bill"));
            players.push(new Player(3,"Rob"));
            players.push(new Player(4,"Bert"));
            players.push(new Player(5,"Ernie"));

            numberOfSpies = 0;
            numberOfResistanceMembers = 0;           
        })
        it('canStartGame() should return false because there are not enough players(<5)',()=>{
            assert.isFalse(game.canStartGame());
        });
        it('canStartGame() should return true because there are enough players(5>)',()=>{
            game.addMultiplePlayers(players);
            assert.isTrue(game.canStartGame());
        });
        it('should test addMultiplePlayers() method by adding an array of 5 players to the current game',()=>{
            game.addMultiplePlayers(players);
            assert.equal(game.getPlayers().length, 5);
        })

        it('5 player role assignment test - should be 2 spies and 3 resistance members', function(){
            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);

            assert.equal(numberOfSpies,2);
            assert.equal(numberOfResistanceMembers,3);
        });
        it('6 player role assignment test - should be 2 spies and 4 resistance members', function(){
            players.push(new Player(6,"Beanie"));

            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);

            assert.equal(numberOfSpies,2);
            assert.equal(numberOfResistanceMembers,4);
        });
        it('7 player role assignment test - should be 3 spies and 4 resistance members', function(){
            players.push(new Player(6,"Beanie"));
            players.push(new Player(7,"Tom"));

            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);

            assert.equal(numberOfSpies,3);
            assert.equal(numberOfResistanceMembers,4);
        });
        it('8 player role assignment test - should be 3 spies and 5 resistance members', function(){
            players.push(new Player(6,"Beanie"));
            players.push(new Player(7,"Tom"));
            players.push(new Player(8,"Scott"));
            
            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);

            assert.equal(numberOfSpies,3);
            assert.equal(numberOfResistanceMembers,5);
        });
        it('9 player role assignment test - should be 3 spies and 6 resistance members', function(){
            players.push(new Player(6,"Beanie"));
            players.push(new Player(7,"Tom"));
            players.push(new Player(8,"Scott"));
            players.push(new Player(9,"Mark"));

            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);
        
            assert.equal(numberOfSpies,3);
            assert.equal(numberOfResistanceMembers,6);
        });
        it('10 player role assignment test - should be 4 spies and 6 resistance members', function(){
            players.push(new Player(6,"Beanie"));
            players.push(new Player(7,"Tom"));
            players.push(new Player(8,"Scott"));
            players.push(new Player(9,"Mark"));
            players.push(new Player(6,"Jack"));

            game.addMultiplePlayers(players);
            game.assignRoles();
            game.getPlayers().map(checkRoles);

            assert.equal(numberOfSpies,4);
            assert.equal(numberOfResistanceMembers,6);
        });


    })
    describe.only('Captain Assignment testing', function(){
        
        beforeEach(function(){
            game = new Game();

            players = [];

            players.push(new Player(1,"Naymat"));
            players.push(new Player(2,"Bill"));
            players.push(new Player(3,"Rob"));
            players.push(new Player(4,"Bert"));
            players.push(new Player(5,"Ernie"));

            game.assignRoles();
        })

        it('Should assign the selected player as the captain', function(){
            player = game.getPlayers()[0];
            game.assignCaptain(player);

            assert.equal(game.getCaptain(), player);
        })

        it('Should assign the next player in playerList to be captain', function(){
            player = game.getPlayers()[0];
            game.assignCaptain(player);

            nextPlayer = game.getPlayers()[1];
            game.nextCaptain();

            console.log(nextPlayer);
            console.log(game.getCaptain());
            assert.equal(game.getCaptain(), nextPlayer);
        })

        it('Should randomly assign a captain', function(){
            //since no expected value for randomness, we'll just test the method and print out whoever is the captain

            captain = game.randomCaptain();
            console.log(captain);
        })

    })
})

