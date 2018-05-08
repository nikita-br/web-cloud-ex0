var events = require('events'),
    eventsConfig = require('./module');

class Candidate extends events.EventEmitter{
    constructor(name) {
        super();
        this.votes = 0;
        this.on("voted",voted);
        this.name = name;

    }
    vote(){
        this.votes++;
        this.emit('voted');
    }
}

function voted(){
    console.log(`voted for ${this.name}: ${this.votes}`);
}

var nik = new Candidate("nik");
var niki = new Candidate("niki");
var nikita = new Candidate("nikita");

nik.vote();
nik.vote();
nik.vote();
nikita.vote();
