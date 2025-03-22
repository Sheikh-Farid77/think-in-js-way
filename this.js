// There are 4 rules in this concept

// 1. implicit binding
/*
const sakib = {
    name: 'sakib',
    age: 34,
    printPlayerName: function(){
        console.log(this.name)
    }
}

sakib.printPlayerName();

*/

/*

const printPlayerNameFunction = function (obj){
    obj.printPlayerName = function(){
        console.log(this.name)
    }
}

const sakib = {
    name: 'Sakib',
    age: 35,
}

printPlayerNameFunction(sakib)
sakib.printPlayerName();

*/

/*

var person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name)
        }
    }
}

const sakib = person('Shakib', 34);
sakib.printName();

*/

/*
var person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name)
        },
        father: {
            name: 'mr. x',
            printName: function(){
                console.log(this.name)
            }
        }
    }
}

const sakib = person('Shakib', 34);
sakib.father.printName();

*/

// i will go there where function is called if there is a dot before the function then the object is pointing this

// only work for normal function will not work for arrow function

// 2. explicit 

/*

 const printName = function(v1, v2){
    console.log(`${this.name} is ${v1} ${v2}`)

}

const sakib = {
    name: 'sakib',
    age: 34,
}
const v1 = 'Best'
const v2 = 'All-Rounder'

// printName.call(sakib, v1, v2);// i am telling that sakib is this and i can take as many as need parameter i have to send parameter one by one 

// if we need to send an array as a parameter we will use apply method

const v = [v1, v2]

printName.apply(sakib, v)


printName();

// bind is same as call method but it do not call directly we can store it as a variable and later we can call it

*/

// 3. new binding

/*

function person (name, age){
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`)
}

const sakib = new person('sakib', 45);

*/



// 4. window binding


// "use strict"
const printName = function(){
    console.log(this.name)
}


const sakib = {
    name: 'Sakib',
}

// printName.call(sakib);
printName()