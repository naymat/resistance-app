class Mission{
    constructor(){
        this.playersOnMission = [];
    }
    addPlayerToMission(player){
        this.playersOnMission.push(player);
    }
    getPlayersOnMission(){
        return this.id;
    }
    
}
module.exports = Mission;