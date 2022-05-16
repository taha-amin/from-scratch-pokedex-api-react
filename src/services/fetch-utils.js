export async function getPokemons(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/movies?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
