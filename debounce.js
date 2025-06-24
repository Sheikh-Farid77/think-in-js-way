const debounce = (fn, delay) => {
    let timeOutId;
    return () => {
        if (timeOutId) {
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            fn()
        }, delay)
    }
}

document.getElementById('btn').addEventListener('click', debounce(() => {
    console.log('clicked')
}, 500))