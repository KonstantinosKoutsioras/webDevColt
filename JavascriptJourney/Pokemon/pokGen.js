const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// const h1 = document.querySelector("h1");
// const cont = document.querySelector("#container");
let j = 1;
const pokedex = document.querySelector("body");

for (i = 1; i <= 151; i++) {
    const genCount = document.createElement("h1");  //Generation Element
    const pkmnCont = document.createElement("div"); //Container for the pokemon Element
    const pokemon = document.createElement("div");  //Container for Pokemon details
    const pkmnImg = document.createElement("img");  //Pokemon sprite
    const pkmnNum = document.createElement("span"); //Pokemon Pokedex number

    if (i <= 151) {     //Checks in what Generation we currently are
        if (i === 1) {  //Simply appends the new Generation. Remember to change number when writing it
            genCount.innerText = `Generation ${j}`;
            pokedex.append(genCount);    //Append new Generation to body            
            j++;
        }

        pkmnNum.innerText = `#${i}`;    //Set Pokedex number to Pokemon container
        pkmnImg.src = `${baseURL}${i}.png`; //Image corresponding to Pokemon number
        pokemon.classList.toggle("pokemon");    //Aligning and stuff
        pkmnNum.classList.toggle("pkmnNum");    //Same^


        pokemon.append(pkmnImg);   //Image through URL
        pokemon.append(pkmnNum);   //Pokedex number
        pkmnCont.append(pokemon);  //Completed Pokemon Entry
        genCount.append(pkmnCont);  //Append Pokemon container to Generation
    }

}