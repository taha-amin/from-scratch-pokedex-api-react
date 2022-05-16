export async function getPokemons(name) {
  const rawResponse = await fetch(`/.netlify/functions/pokemons?name=${name}`);
  const data = await rawResponse.json();

  return data;
}
