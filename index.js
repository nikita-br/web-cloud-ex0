var Candidate = require('./module1');
    Server = require('./server');
    Emmiter = require('events');
var nik = new Candidate("nikita");
nik.vote();
nik.vote();
nik.vote();
nik.print();