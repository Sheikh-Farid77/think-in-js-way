class Person{  // parent class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Cricketer extends Person{ // sub class
    constructor(name, age, type, country){
        super(name, age)
        this.type = type;
        this.country = country;
    }

    play(){
        console.log(`${this.name} is playing`)
    }
}

const sakib = new Cricketer('sakib', 45, 'Cricketer', 'Bangladesh')

console.log(sakib)

sakib.play()

console.log(typeof sakib)

// thats how we can create class in js