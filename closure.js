function stopWatch(){
    var time = Date.now();

    function getTime(){
        console.log(Date.now() - time)
    }

    return getTime
}

var time = stopWatch();
time();

for(let i = 0; i < 10000000; i++){
    var a = Math.random() * 1000000
}

time();