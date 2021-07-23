// axios.get('https://api.cryptonator.com/api/full/btc-usd')    //Axios introduction
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("whoopsie");
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
//         console.log(res.data.ticker.price);
//     } catch (err) {
//         console.log(err);
//     }
// }

// fetchBitcoinPrice();

const jokeButton = document.querySelector("#seriously");    //Setting Headers with Axios
const h1 = document.querySelector("h1");
const jokeDisplay = document.querySelector("#jokeDisplay");
const savedJokeList = document.querySelector("#savedJokes");


const saveButton = document.createElement("button");
saveButton.textContent = "Save";

let stop = 0;
jokeButton.addEventListener('click', async () => {
    try {
        stop++
        h1.textContent = await getDadJoke();
        jokeButton.textContent = "Not funny enough?";
        saveButton.classList.add("btn", "btn-secondary", "col-6");
        jokeDisplay.append(saveButton);
        // if (stop === 3) {
        //     const button = document.createElement("button");
        //     button.textContent = "Had Enough Punk?";
        //     section.append(button);
        // }
    } catch (err) {
        console.log(err);
    }
})

saveButton.addEventListener('click', () => {
    const savedJoke = document.createElement("li");
    savedJoke.textContent = h1.textContent;
    savedJokeList.append(savedJoke);
})

savedJokeList.addEventListener('click', (e) => {
    e.target.remove();
})



const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        const badJoke = res.data.joke;
        console.log(badJoke);
        return badJoke;
    } catch (err) {
        return `Seems like something worked too right...${err}`;
    }

}

