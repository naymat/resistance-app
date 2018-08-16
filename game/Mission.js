class Mission{
    constructor(numberOfPlayers){
        this.numberOfPlayers = numberOfPlayers;
        this.playersOnMission = [];
        this.votes = [];
    }
    addMultiplePlayersToMission(playerList){
        playerList.map((player) => {
            this.addPlayerToMission(player);
        });
    }
    addPlayerToMission(player){
        this.playersOnMission.push(player);
    }
    getPlayersOnMission(){
        return this.playersOnMission;
    }
    addVotes(votes){
        if (votes.length === this.numberOfPlayers){
            this.votes = votes;
        }
    }
    evaluateVotes(){
        let acceptVotes = 0;
        let rejectVotes = 0;
        this.votes.map((vote) =>{
            //if vote is true, it's an accept vote so we add 1 to acceptVotes
            if(vote){
                acceptVotes += 1;
            }
            else{
                rejectVotes += 1;
            }
        });

        if(acceptVotes > rejectVotes){
            return true;
        }
        else{
            return false;
        }
    }
    /**
     * @param round - round number(5 rounds max)
     * @param numberOfPlayers - number of Players in the game(5-10)
     */
    numberOfPlayersForMission(round){
        let missionArray = null;
        switch(this.numberOfPlayers){
            case 5:
                missionArray = [2,3,2,3,3];
                break;
            case 6:
                missionArray = [2,3,4,3,4];
                break;
            case 7:
                missionArray = [2,3,3,4,4];
                break;
            case 8:
                missionArray = [3,4,4,5,5];
                break;
            case 9:
                missionArray = [3,4,4,5,5];
                break;
            case 10:
                missionArray = [3,4,4,5,5];
        }

        return missionArray[round  - 1];
    }
}
module.exports = Mission;