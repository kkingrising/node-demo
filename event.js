var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var a = new Person('a');
var b = new Person('b');

var person = [a, b];

person.forEach(function (person) {
    person.on('speak', function (message) {
        console.log(person.name + ' said：' + message)
    })
})

a.emit('speak', 'hello');
b.emit('speak', 'hello');