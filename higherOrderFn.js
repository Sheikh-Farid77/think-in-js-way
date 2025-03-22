// a function work upon another function called higher order function.

// 1. a function take a function as a parameter
// 2. a function return a function

function hello(){
    return function (){
        console.log('hello world!')
    }
}

// hello()();


// example 1

// without higher oder function 

const arr = [1, 2, 3, 4, 5];

const result = [];

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
    
}

// console.log(result)

// example with higher oder function 

const res = arr.map(e => e * 2);
// console.log(res)


// our very own map function 

const languages = ['Javascript', 'Java', 'PHP', 'C'];

function mapFarid(arr, fun){
    const updatedArr = [];

    for (let i = 0; i < arr.length; i++) {
        updatedArr.push(fun(arr[i]));
        
    }

    return updatedArr;
}

const array = mapFarid(languages, function(item){
    return item.length
})

console.log(array)








