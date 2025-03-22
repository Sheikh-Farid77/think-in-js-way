function Person (name, age){ // parent class
    this.name = name;
    this.age = age;
}


function Cricketer (name, age, type, country){ // sub class
    Person.call(this);  // thats how we can connect those two function
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

// we connected this two function that called inheritance


Person.prototype = {
    eat: function (){
        console.log(`${this.name} is eating`)
    }
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer

const sakib = new Cricketer('sakib', 45, 'All Rounder', 'Bangladesh')

console.log(sakib)