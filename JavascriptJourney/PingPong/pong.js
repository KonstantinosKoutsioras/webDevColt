const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const players = [p1, p2];

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const overtime = document.querySelector("#overtime");

let winningScore = parseInt(winningScoreSelect.value);  //parseInt because select.value is a string
let isGameOver = false;

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of players) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    overtime.textContent = "";
    winningScore = parseInt(winningScoreSelect.value);
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === opponent.score && player.score === (winningScore - 1) || opponent.score === player.score && opponent.score === (winningScore - 1)) {
            winningScore++;
            overtime.textContent = `Play to ${winningScore}`;
        }
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

document.addEventListener('keydown', evt => {
    if (evt.key === '1') {
        updateScores(p1, p2);
    }
    console.log(evt);
    if (evt.key === '2') {
        updateScores(p2, p1);
    }
    if (evt.key === 'r') {
        reset();
    }

})

// function overTime(player, opponent) {
//     if (player.score === opponent.score && player.score === (winningScore - 1)) {
//         winningScore++;
//         overtime.innerText = `Play to ${winningScore}`;
//     }
// }