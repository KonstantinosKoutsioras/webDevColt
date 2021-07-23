const colorDisplay = document.querySelector("h1");
const body = document.querySelector("body");
const btnColor = document.querySelector("#change");
const colors = [];

btnColor.addEventListener('click', () => {


    body.style.backgroundColor = makeRandColor();
    colorDisplay.innerText = makeRandColor();

    colorDisplay.style.color = makeRandColor();
    btnColor.innerText = "Oh! Maybe another color?"

    colors.push(colorDisplay.style.color);
})

const makeRandColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return color = `rgb(${red}, ${green}, ${blue})`;
}