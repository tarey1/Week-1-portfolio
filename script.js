async function getPokemonData (pokemonName) {
    try {
        if (typeof pokemonName !== 'string' || pokemonName.trim() === '') {
            throw new Error('Invaild Pokémon name. Please provide a non-empty string.');
        }
      
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
        const response = await fetch(url);
      
        if (!reponse.ok) {
            throw new Error(`Pokémon not found: ${pokemonName} (status: ${response.status})`);
        }
      
        const data = await response.json();
      
        console.log(`Name: ${data.name}`);
    } catch (error) {
        console.error('Error fetching Pokémon data:', error.message);
    }
}
  
getPokemonData('pikachu');
  
    const data = ["The Moonlight Greatsword first appeared in King's Field and all Fromsoftware games after that!", "Demon's souls is coined as the first souls game but Fromsoftware made King's Field way before Demon's souls!", "In Dark Souls 1 you can fight any boss except the final as your first boss if you use glitches.", "Sekiro is getting a anime adaptation and Elden Ring is getting a movie!"];
    const randomString = data[Math.floor(Math.random() * data.length)];
    console.log(randomString);
    
    document.getElementById("btn").onclick = function() { 
    document.getElementById("message").innerHTML = randomString; 
};