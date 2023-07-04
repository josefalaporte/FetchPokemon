function datosPoke (){
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(data => {
    const pokemonList =document.getElementById('pokemon-list');

    data.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
            const listItem = document.createElement('li');
            const image = document.createElement('img');
            image.src=pokemonData.sprites.front_default;
            const name = document.createElement('span');
            name.textContent = pokemon.name;
            listItem.appendChild(image);
            listItem.appendChild(name);

            pokemonList.appendChild(listItem);
        });
    });
})

.catch(error => console.log('ERROR', error));

}


/*const image = document.createElement('img');
image.src=pokemonData.sprites.front_default;

const name = document.createElement('span');
name.textContent = pokemon.name;

listItem.appendChild(image);
listItem.appendChild(name);

pokemonList.appendChild(listItem)

*/

