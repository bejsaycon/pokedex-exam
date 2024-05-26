import React, { useState, useEffect } from 'react';
import Header from './Header';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      });
  }, []);

  const fetchPokemonDataBeforeRedirect = async (pokemonID) => {
    // Add your logic to fetch Pokémon data before redirecting.
    // Return true if the fetch is successful, otherwise return false.
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Header />
      <PokemonList pokemons={pokemons} fetchPokemonDataBeforeRedirect={fetchPokemonDataBeforeRedirect} />
    </div>
  );
}

export default App;
