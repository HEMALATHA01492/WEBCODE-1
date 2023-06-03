
//creating container div
let div=document.createElement('div');
div.setAttribute('class','container');

//Heading for the Page
let heading=document.createElement('h1');
heading.setAttribute('class','head');
heading.innerText='WEBCODE 1 - Pokemon API';
div.appendChild(heading);

//create a Ordered List
let list=document.createElement('ol');
list.setAttribute('class','list');
div.appendChild(list);
console.log(list);
document.body.appendChild(div)

//fecting all pokemon data using for loop from api and output in console window

const fetchPokmon= async ()=>{
const promises=[];
for(let i=1; i<= 150 ; i++){
    const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(
    await fetch(url)
    .then( response => response.json()));
}
 Promise.all(promises)
  .then((results) => {
    const pokemon= results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        weight:data.weight,
        height:data.height,
        move:data.moves[0].move['name'],
        ability:data.abilities[0].ability['name'],
        type: data.types.map((type) => type.type.name).join(', ')
     }));
    
    displayPokemon(pokemon);
  });
 

};
//output in webpage
const displayPokemon = (pokemon) =>{
    console.log(pokemon);
    const pokemonShowAll=pokemon.map( pokeman =>`
    <li class='card'>
        <h2 class='card-title'> ${pokeman.id}. ${pokeman.name}</h2>
        <img src='${pokeman.image}' class="image">

        <p class='card-subtitle'>Type : ${pokeman.type}</p>
        <p class='card-subtitle'>Height : ${pokeman.height} </p>
        <p class='card-subtitle'>Weight : ${pokeman.weight}</p>
        <p class='card-subtitle'>Ability : ${pokeman.ability}</p>
        <p class='card-subtitle'>Moves : ${pokeman.move}</p>       
    </li>
    `).join("");
    list.innerHTML=pokemonShowAll;

}   
  fetchPokmon();