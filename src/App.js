import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('a');

  async function load() {
    const {
      data: { results },
    } = await getPokemons(query);

    setPokemons(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <header className="App-header">
        {pokemons.map(({ pokemon, height, weight, url_image }, i) => (
          <div key={pokemon + i}>
            <h2>Name: {pokemon}</h2>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <img src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${url_image}`} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
