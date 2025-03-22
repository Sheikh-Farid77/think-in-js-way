// Array Mastery

// array is a data type where we can store different types of data like number, string, boolean, object at the same time

// How to create an array
const salad = ['tomato', 'cucumber', 'carrot', 'chili', 'corn']
const newSalad = new Array('tomato', 'cucumber', 'carrot', 'chili', 'corn');

// here salad === newSalad false because of reference value

// but in array constructor if you put single value it always define the length of the array

const arr = new Array(3);
// result arr = [empty, empty, empty]

const arr2 = new Array(3, 1);
// result arr1 = [3, 1];


for (let i = 0; i < salad.length; i++) {
    
    // console.log(salad[i])
    
}

// salad.push('mango') add an element in the last position of an array
// salad.unShift('apple') add an element in the first position of an array

// console.log(salad.push('mango')) it returns the new length of the array

// salad.pop('mango') it remove the last element of an array and return that removed element
// salad.shift('mango') it remove the first element of an array and return that removed element


// part 1 complete


// destructuring on an array 

const [a, b, c, d] = [1, 2, 3, 'four']
const x = [1, 2, 3, 4, ['apple', 'banana', 'carrot']]

const [p, q, ...rest] = x;
// here rest variable return an array that contain rest of elements of the array.

const [one, two, three, four, [m, n , o]] = x

// console.log(n)  banana

// const [a, , c] = [1, 2, 3] we can skip an element of an array through that way.

const array = [1, 2, 3]
array[5] = 5;
console.log(array)

array.join(',') //it return a string 1,2,3,
// [].join() always return an empty string