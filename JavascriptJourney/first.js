// function greet() {
//     let greet = "hi";
//     greet;
// }

// greet();

// const greet = name => {
//     return `Hey ${name}`;
// }

// print("what")

// const nums = [1, 23, 432, 45241, 124, 3435, 2, 12545, 432];

// const wow = Math.max(() => {
//     for (let num of nums) {
//         return num;
//     }
// })


// const usernameInput = document.querySelector('input');
// const h1 = document.querySelector('h1');

// usernameInput.addEventListener('input', function (e) {
//     console.log(e);
//     h1.innerText = usernameInput.value;
// });

const fakeRequest = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.7) {
                document.body.style.backgroundColor = color;
                resolve();
            } else {
                reject();
            }

        }, delay)
    })
}


fakeRequest("red", 1000)
    .then(() => fakeRequest("orange", 1000))
    .then(() => fakeRequest("yellow", 1000))
    .then(() => fakeRequest("green", 1000))
    .then(() => fakeRequest("blue", 1000))
    .then(() => fakeRequest("indigo", 1000))
    .catch(() => {
        console.log("didn't quite work...");
    })