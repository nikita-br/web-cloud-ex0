class Candidate{

    constructor(name) {
        this.votes = 0;
        this.name = name;
    }
    vote(){
        this.votes++;
    }
    print(){
        console.log(this.name,this.votes);
    }


}
module.exports = Candidate;