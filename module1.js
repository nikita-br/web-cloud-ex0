var events = require('events'),
    eventsConfig = require('./config');

class Candidate extends events.EventEmitter{

    constructor(name) {
        super();
        this.votes = 0;
        this.name = name;
    }
    vote(){
        this.votes++;
        this.emit('voted');
    }

}

 module.disp =  function display(){
    console.log("voted!!!");
};

module.exports = Candidate;