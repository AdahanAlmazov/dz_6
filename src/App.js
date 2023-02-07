import { useEffect, useState } from "react";
import { fetchPokemonsByName } from "./api/fetchPokemonByName";
import { fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard";
import "./theme/index.css";
import { useTheme } from "./theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [pokemon, setPokemon] = useState(["pokemon-1", "pokemon-2"]);

  useEffect(() => {
    fetchPokemons().then((data) => setPokemon(data));
    fetchPokemonsByName("pikachu").then((data) => console.log(data));
  }, []);

  return (
    <div className={`app ${theme}`}>
      <PokemonCard pokemons={pokemon} />
      <button className="btn" onClick={toggleTheme}>
        Change color
      </button>
    </div>
  );
}

export default App;
