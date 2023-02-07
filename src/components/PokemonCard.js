import React from "react";

const PokemonCard = ({ pokemons }) => {
  return (
    <div className="pokemonCard">
      <ol className="pokemonLi">
        {pokemons.map((data, i) => (
          <div key={i}>{i + data.name}</div>
        ))}
      </ol>
    </div>
  );
};

export default PokemonCard;
