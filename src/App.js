import React, { useState, useEffect } from 'react';
import Header from './Header';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      });
  }, []);

// const fetchPokemonDataBeforeRedirect = async (pokemonID) => {
//   try {
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(res => res.json()).then((data) => {
//         setPokemon(data.results);
//     })
//   return true;
//   } catch (error) {
//     console.error("Failed to fetch Pokemon data before redirect", error);
//     return false;
//   }
// };

if (loading) {
  return <p>Loading...</p>;
}

  return (
    <div className="App">
      <Header />
      <PokemonList
      pokemons={pokemons} 
      // fetchPokemonDataBeforeRedirect={fetchPokemonDataBeforeRedirect}
      />
    </div>
  );
}

export default App;
