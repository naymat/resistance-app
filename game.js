class Game{
    constructor(){
        this.playerList = [];
        this.roundNumber = 0;
    }

    /**
     * 
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
}

class Player{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    getId(){
        return id;
    }
    getName(){
        return this.name;
    }
    assignAsSpy(){
        this.type = 'Spy';
    }
    assignAsResistanceMember(){
        this.type = 'Resistance';
    }
}
// const resist  = new Game();

// var p1 = new Player(1,'Naymat');
// console.log(p1.getName());
module.exports = Player;