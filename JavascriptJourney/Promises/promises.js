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
