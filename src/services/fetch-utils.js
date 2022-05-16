export async function getPokemons(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemons?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
