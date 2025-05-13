// function fn(arg){
//     arg();
// }

// fn(function(){
//     console.log('hello world')
// })

const payment = true;
const mark = 88;

function enroll(callback) {
    console.log('Your enrollment is in progress')
    setTimeout(() => {
        if (payment) {
            callback();
        } else {
            console.log("payment failed")
        }
    }, 2000)
}

function progress(callback) {
    console.log('course is on progress');
    setTimeout(() => {
        if (mark > 80) {
            callback()
        } else {
            console.log('you will not get certificate')
        }
    }, 3000)
}

function getCertificate() {
    console.log('preparing your certificate')
    setTimeout(() => {
        console.log("Congratulation you get your certificate")
    }, 1000)
}

enroll(() => {
    progress(getCertificate)
})