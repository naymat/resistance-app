class Game{
    constructor(){
        this.playerList = [];
        this.roundNumber = 0;
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
        if (this.playerList.length > 5 && this.playerList.length <= 10){
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
            
        }

    }
}

class Player{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    assignAsSpy(){
        this.role = 'Spy';
    }
    assignAsResistanceMember(){
        this.role = 'Resistance';
    }
    getRole(){
        return this.role;
    }
}
// const resist  = new Game();

// var p1 = new Player(1,'Naymat');
// console.log(p1.getName());
module.exports = {Player, Game};