const Player = require("../game/Player");

class Game{
    constructor(){
        this.playerList = [];
        this.roundNumber = 1;
        this.captain = null;
        
    }
    /**
     * @param {Player} player - add single player to be registered to the game
     */
    addPlayer(player){
        this.playerList.push(player);
    }
    /**
     * Returns Array with the current Player objects
     */
    getPlayers(){
        return this.playerList;
    }
    /**
     * @param {Player[]} playerArray - The players to be added to the game
     */
    addMultiplePlayers(playerArray){
        playerArray.map(player =>{
            this.addPlayer(player);
        })
    }
    /**
     * Returns true if game can start with the current amount of players
     * Otherwise return false 
     */
    canStartGame(){
        if (this.playerList.length >= 5 && this.playerList.length <= 10){
            return true;
        } 
        return false; 
    }
    /**
     * Assign roles to current players in PlayerList array
     */
    assignRoles(){
        if(this.canStartGame()){
            //Assign players they're roles randomly
            const numberOfSpiesNeeded = this.spyTeamSize()
            const numberOfResistNeeded = this.resistanceTeamSize();

            let currentSpies = 0;
            let currentResist = 0;

            this.playerList.map(player =>{
                //if there's enough resistance members, then the rest of the players are spies
                if(currentSpies < numberOfSpiesNeeded && currentResist == numberOfResistNeeded){
                    player.assignAsSpy();
                    currentSpies += 1;
                }
                //if there's enough spies, then the rest of the players are resistance members
                else if(currentResist < numberOfResistNeeded && currentSpies == numberOfSpiesNeeded){
                    player.assignAsResistanceMember();
                    currentResist +=1;
                }
                //Otherwise we randomly select resistance members and spies
                else{
                    var rand  = Math.floor((Math.random() * 2) + 1);

                    if(rand == 1){
                        player.assignAsResistanceMember();
                        currentResist += 1;
                    }
                    else{
                        player.assignAsSpy();
                        currentSpies += 1;
                    }
                }
                
            });
            
        }

    }

    getCaptain(){
        return this.captain;
    }
    /**
     * Assigns the player passed to the function as the captain
     * @param {Player} player - The player to be assigned captain
     */
    assignCaptain(player){
        this.captain = player;
    }

    assignRandomCaptain(){
        const rand  = Math.floor((Math.random() * (this.playerList.length - 1)) + 0);

        this.assignCaptain(this.playerList[rand]);
    }

    /**
     * Assigns the player next to the current captain in the list to be the new captain
     * If the current captain is the last element in the list then new captain will be the first element in the list
     */
    nextCaptain(){
        let currentCaptain = this.getCaptain();
        let index = this.playerList.findIndex((player) =>{
            if(currentCaptain === player){
                return player;
            }
        });
        if(index === this.playerList.length - 1){
            this.assignCaptain(this.playerList[0]);
        }
        else if(index < this.playerList.length){
            this.assignCaptain(this.playerList[index + 1]);
        }
        else{
            return Error;
        }
    }

    /**
     * 
     */
    spyTeamSize(){
        const numberOfPlayers = this.playerList.length;
        if(numberOfPlayers == 5 || numberOfPlayers == 6){
            return 2;
        }
        if(numberOfPlayers == 7 || numberOfPlayers == 8 || numberOfPlayers == 9){
            return 3;
        }
        if(numberOfPlayers == 10){
            return 4;
        }
    }
    resistanceTeamSize(){
        return this.playerList.length - this.spyTeamSize();
    }
}
module.exports = {Player, Game};