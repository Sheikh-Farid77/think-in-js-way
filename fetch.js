async function fetchPost() {
    const API = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(API);
        if (!response.ok) {
            new Error('Data not found')
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)

    }

}

// post method

async function postComment (userData) {
    const API = 'https://jsonplaceholder.typicode.com/users';

    try{
        const response = await fetch(API, {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(userData)

        })
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error)
    }
}

const newUser = {
    id: crypto.randomUUID(),
    name: "Sheikh Farid"
}

postComment(newUser);