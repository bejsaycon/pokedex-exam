import React, {useState} from 'react';

const PokemonList = ({ pokemons }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = async (pokemonID) => {
    // Fetch Pokemon data if needed
    // const success = await fetchPokemonDataBeforeRedirect(pokemonID);
    // if (success) {
    //   setSelectedPokemon(pokemonID);
    // }

    // For now, directly set the selected Pokemon
    setSelectedPokemon(pokemons.find(pokemon => pokemon.url.includes(pokemonID)));
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('overlay')) {
      closeModal();
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
                className="list-item cursor-pointer"
                onClick={() => handlePokemonClick(pokemonID)}
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
      {selectedPokemon && (
        <div className="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
          <div className="modal bg-white p-4 rounded-lg">
            <button className="absolute top-0 right-0 m-2" onClick={closeModal}>
              <svg
                className="w-6 h-6 text-gray-700 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>
              <h2 className="text-xl font-semibold">{selectedPokemon.name}</h2>
              <img
                src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${selectedPokemon.url.split("/")[6]}.svg`}
                alt={selectedPokemon.name}
                className="mx-auto my-4"
              />
              {/* Add more information about the selected Pokemon */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
