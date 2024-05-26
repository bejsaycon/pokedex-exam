import React from 'react';

const PokemonList = ({ pokemons, fetchPokemonDataBeforeRedirect }) => {
  const handleRedirect = async (pokemonID) => {
    const success = await fetchPokemonDataBeforeRedirect(pokemonID);
    if (success) {
      window.location.href = `./detail.html?id=${pokemonID}`;
    }
  };

  return (
    <div className="pokemon-list">
      <div className="container">
        <div className="list-wrapper">
          {pokemons.map((pokemon) => {
            const pokemonID = pokemon.url.split("/")[6];
            return (
              <div
                key={pokemonID}
                className="list-item"
                onClick={() => handleRedirect(pokemonID)}
              >
                <div className="number-wrap">
                  <p className="caption-fonts">#{pokemonID}</p>
                </div>
                <div className="img-wrap">
                  <img
                    src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                    alt={pokemon.name}
                  />
                </div>
                <div className="name-wrap">
                  <p className="body3-fonts">{pokemon.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="not-found-message">Pokemon not found</div>
    </div>
  );
};

export default PokemonList;
