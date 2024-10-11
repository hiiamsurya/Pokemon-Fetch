const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typeDiv = document.getElementById("types");
const pokemonInfo = document.getElementById("pokemon-info");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const sprite = document.getElementById("sprite")

const speed = document.getElementById("speed");

searchButton.addEventListener("click", () => {
  const existingSprites = document.getElementById("sprite");
  if(existingSprites){
    existingSprites.remove();
  }
  
  
  const searchInputs = searchInput.value.toLowerCase();
  
  const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInputs}`;

fetch(apiUrl).then((res)=> { 
  if(!res.ok){
    throw new Error(`Pokemon not found`);
  };
  return res.json();}).then((data) =>{
   
  sprite.src = data.sprites.front_default;
  sprite.style.display ="block";
  pokemonInfo.appendChild(sprite);
    console.log(data);
  pokemonName.textContent = data.name;
  pokemonId.textContent = data. id;
  weight.textContent = data.weight;
  height.textContent = data.height;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  typeDiv.textContent ="";
  data.types.forEach((typeInfo) => {
    const type = document.createElement("span");
    type.textContent = typeInfo.type.name.toUpperCase();
    typeDiv.appendChild(type);
  }) 
  
  }).catch((error) =>{ alert(error.message);})
})
