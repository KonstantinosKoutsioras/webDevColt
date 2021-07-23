const h1 = document.querySelector("h1");
const cont = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement("span");
    const pkmnNum = document.createElement("span");
    const pkmnImg = document.createElement("img");

    pkmnImg.src = `${baseURL}${i}.png`;
    pkmnNum.innerText = `#${i}`;
    pkmnNum.classList.toggle("pkmnNum");
    pokemon.classList.toggle("pokemon");

    pokemon.appendChild(pkmnImg);
    pokemon.appendChild(pkmnNum);
    cont.appendChild(pokemon);
}