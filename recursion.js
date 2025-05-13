// when a function call itself in his body called recursion in any programming language

const myFun = function () {
    myFun();
}

// f(n-1) + n = f(n)

function sum (n){

    if(n === 0){
        return 0;
    }else{
        return sum(n - 1) + n;
    }
    
}


console.log(sum(10));