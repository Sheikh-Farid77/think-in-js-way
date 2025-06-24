

const fetchImage = async (prompt) =>{
     const requests = Array.from({ length: 5 }, () =>
            fetch(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`)
        );

        const responses = await Promise.all(requests);
        console.log(responses)
   
}

fetchImage('fish')