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
    createSpy(){
        this.type = 'Spy';
    }
    createResistanceMember(){
        this.type = 'Resistance';
    }
}

var p1 = new Player(1,'Naymat');
console.log(p1.getName());
