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

// const jokeButton = document.querySelector("#seriously");    //Setting Headers with Axios
// const h1 = document.querySelector("h1");
// const jokeDisplay = document.querySelector("#jokeDisplay");
// const savedJokeList = document.querySelector("#savedJokes");


// const saveButton = document.createElement("button");
// saveButton.textContent = "Save";

// let stop = 0;
// jokeButton.addEventListener('click', async () => {
//     try {
//         stop++
//         h1.textContent = await getDadJoke();
//         jokeButton.textContent = "Not funny enough?";
//         saveButton.classList.add("btn", "btn-secondary", "col-6");
//         jokeDisplay.append(saveButton);
//         // if (stop === 3) {
//         //     const button = document.createElement("button");
//         //     button.textContent = "Had Enough Punk?";
//         //     section.append(button);
//         // }
//     } catch (err) {
//         console.log(err);
//     }
// })

// saveButton.addEventListener('click', () => {
//     const savedJoke = document.createElement("li");
//     savedJoke.textContent = h1.textContent;
//     savedJokeList.append(savedJoke);
// })

// savedJokeList.addEventListener('click', (e) => {
//     e.target.remove();
// })



// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } };
//         const res = await axios.get("https://icanhazdadjoke.com/", config);
//         const badJoke = res.data.joke;
//         console.log(badJoke);
//         return badJoke;
//     } catch (err) {
//         return `Seems like something worked too right...${err}`;
//     }

// }



// function makeColor(r, g, b) {   //Factory Functions
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     };
//     return color;
// }

// const firstColor = makeColor(23, 41, 54);
// firstColor.rgb();

// const first = document.querySelector('#first')  //Constructor functions
// const second = document.querySelector('#second')

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     );
// };

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(40, 50, 60);


class Pet {             // Extends and Super Keywords
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `MEOW!!`;
    }
}

class Dog extends Pet {
    bark() {
        return `WOOF!!!`;
    }
    eat() {
        return `${this.name} is eating a lot!!`;
    }
}

const first = document.querySelector("#first");
const second = document.querySelector("#second");


class Dice {
    constructor(sides) {
        this.sides = sides;
    }
    roll(rollTimes = 1) {
        const { sides } = this;
        const diceRoll = Math.floor(((Math.random() * sides) + 1) * rollTimes);
        if (rollTimes === 1) {
            first.textContent = `Wow! You rolled ${diceRoll}!`
            if (diceRoll === sides) {
                second.textContent = `Holy shit. That's a fucking nat${sides}`;
            } else {
                second.textContent = "You could do better";
            }
        } else {
            first.textContent = `Congrats. You rolled ${diceRoll}`;
            second.textContent = "That's cool I guess."
        }
        return `You rolled ${diceRoll}!!`;
    }
}

const d2 = new Dice(2);
const d20 = new Dice(20);
