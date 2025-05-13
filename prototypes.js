//  function Person(name, age) {
//     const person = Object.create(Person.prototype);

//     person.name = name;
//     person.age = age;



//     return person


// }

// Person.prototype = {
//     eat () {
//         console.log(`Person is eating`)
//     },

//     sleep () {
//         console.log(`Person is sleeping`)
//     }
// }

// const sakib = Person('sakib', 20);
// console.log(sakib.eat())

// -------------------------------------------------

// function person(name, age) {
//     this.name = name
//     this.age = age
// }

// person.prototype = {
//     eat(){
//         console.log('person is eating')
//     },
//     sleep(){
//         console.log('person is sleeping')
//     }
// }

// const sakib = new person('sakib', 39);
// sakib.sleep()
// console.log(sakib.sleep())

// ----------------------------------------------------------------------

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    play(){
    console.log(`${this.name} is playing`)
    }
    sleep(){
        console.log('person is playing')
    }
}

const sakib = new Person('sakib', 45);

console.log(sakib)

sakib.play()