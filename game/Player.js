class Player{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.voteHistory = [];
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
    addVote(vote){
        this.voteHistory.push(vote);
    }
}
module.exports = Player;