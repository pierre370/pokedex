export function getPokemons(url = "https://pokeapi.co/api/v2/pokemon%22") {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}