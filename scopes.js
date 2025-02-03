// JavaScript Scopes 

var x = 10;

// parent er dunia 

function myFunc(){

    // nyFunc er dunia or child er dunia
    var y = 20;
   
}

// console.log(window.x) 
console.log(x)

// same output 


{
    // this is block scope
    /*

    আগে শুধু function স্কোপ তৈরি করতো কিন্তূ mordern JavaScript এ ব্লক (kurly brace এর moddhetakei ব্লক বলে যেমন ফর লুপ , if else block) ওহ স্কোপ তৈরি করে। Let, const, function হলো ব্লক স্কোপ মানে let,const দিয়ে কোনো variable ব্লক এর মধ্যে declare করলে টা ব্লক এর বাইরে console.log করলে রেফারেন্স error দেখাবে। কিন্তূ var diye declare করলে সেই variable কে ব্লক এর বাইরেও পাওয়া যাবে। কারণ ভার ব্লক স্কোপ না । Var hoilo function scope. 
There are three types of scope exist in JavaScript global scope, function scope and block scope
Function, let and const are block scope but var is function scope. 
আবার var hoisting support করে। মানে var diye কোনও variable পড়ে declare করে আগেই তাকে console e দেখাইতে চাইলে undefined দেখায় যেটা JavaScript এ one kine of bugs. That's why we never use var in modern JavaScript

*/
}
