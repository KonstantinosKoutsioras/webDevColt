let maximum = parseInt(prompt("Enter a maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a real number you smartass"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your guess:");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Number too HIGH. Guess again!");
    } else if (guess < targetNum) {
        guess = prompt("Number too LOW. Guess again!");
    }
    if (guess === 'q') {
        break;
    }

}

if (guess === 'q') {
    console.log("Quitter quitter chicken dinner. I am not good at this...")
} else if (attempts == 1) {
    console.log("Okay that was lucky~");
} else {
    console.log(`YOU GOT IT! Even though it took you ${attempts} guesses`);
}

