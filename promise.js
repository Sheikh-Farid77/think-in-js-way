//  promise has two state if it fulfill what you want you are in a fulfill state or it is not fulfill what you want you are in a rejected state

// promise
// 1. Resolve
// 2. Reject

// promise return 3 types of value
// 1. undefined: initially when the state value is pending
// 2. value: when resolve is called
// 3. error: when reject is called

// executor function has 3 state
// 1. pending  
// 2. fulfill
// 3. rejected

// handling promise
// 1. .then()
// 2. .catch()
// 3. .finally()
/*
const promise = new Promise((resolve, reject)=>{
reject('i am reject....')
})

promise
.then(
    (result)=>{console.log(result)},
    // (error)=> console.error(error)
)
.catch(
    (error)=>{console.error(error)}
)
.finally(
          ()=>{
                // always it is execute after then or catch block
          }  
)
          

// promise chain
// Rule 1: every promise give you .then() handler method and every reject give you .catch() handler method.
// Rule 2: you can do mainly three valuable things from the .then() method. you can return another promise(for async operation).you can return any other value form synchronous operation. Lastly you can throw an error.

// return a promise form the .then() handler

const getUser = new Promise((resolve, reject) => {
    const user = {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: 'q4358etr'
    }

    resolve(user);
})

// getUser.then(
//     (user) => {
//         console.log(`Use name is ${user.name}`)

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Bangladesh')
//             }, 2000)
//         })
//         .then((address)=>{
//             console.log(`use address is in ${address}`)
//         })
//     }
// )

// in then() block when a function return a value it will be access from another then() block after the previous one.
getUser
    .then((user) => {
        console.log(`user name is ${user.name}`)

        return user.email
    })

    .then((email) => {
        console.log(email)
    })

    // when we throw some error form catch() block it will available in nearest catch() block.

    // Rule 4: unlike .then() and .catch() the finally() handler doesn't process the result value or error. It just passed the result as is to the next handler.

    const promiseFinally = new Promise((resolve, reject)=>{
        resolve("Testing Finally")
    })

    promiseFinally
    .then((result)=>{
        console.log(result)

    })
    .finally(()=>{
        console.log('The finally block is executing')
    })

    // calling the .then() handler method multiple time on a single promise is Not chaining.

    promise
    .then((result) =>{
        // Do something
        return 111
    })
    .then((result)=>{
        // result is 101
        // throw an error
    })
    .catch((error)=>{
        // we get here the error
    })

    // this is called promise chaining
    */

// handle multiple promise
// promise.all([promised])

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

function getPromise(URL) {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`)
            }
            return response.json();

        })


}

const promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
const promise_2 = getPromise(RATICATE_POKEMONS_URL);
const promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])

    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })



    Promise.any([promise_1, promise_2, promise_3])

    // promise.any() method work when any promise resolve from that array

    // settling a promise = fulfill( resolve) + reject. it give us output of everything

    Promise.allSettled([promise_1, promise_2, promise_3])

    // always use that all settled method

    Promise.race([]);

    Promise.resolve();
    Promise.reject();

