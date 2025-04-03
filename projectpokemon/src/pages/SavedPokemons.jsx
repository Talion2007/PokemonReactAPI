import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../App.css";
import SavedPokemonDisplay from "../components/SavedPokemonDisplay";

function PokemonsSalvos() {
  const [pokemonsSalvos, setPokemonsSalvos] = useState([]);
  const [theme, setTheme] = useState(() => {
    const temaSalvo = localStorage.getItem('tema');
    return temaSalvo ? JSON.parse(localStorage.getItem('tema')) : true ;
  });

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("pokemonsSalvos")) || [];
    setPokemonsSalvos(salvos);
  }, []);

  function excluirPokemon(nome) {
    const atualizados = pokemonsSalvos.filter((pokemon) => pokemon.name !== nome);
    setPokemonsSalvos(atualizados);
    localStorage.setItem("pokemonsSalvos", JSON.stringify(atualizados));
    alert(`${nome} foi removido!`);
  }

  return (
    <div className={`main ${theme}`}>
      <header className="header">
        <img src={Logo} alt="Logo Pokémon" loading="lazy" />
        <div>
          <button>
            <Link to="/">Início</Link>
          </button>
        </div>
      </header>
      {pokemonsSalvos.length > 0 ? (
        <div className="lista-pokemons-salvos">
          {pokemonsSalvos.map((pokemon, index) => (
            <SavedPokemonDisplay
              key={index}
              pokemon={pokemon}
              onExcluir={excluirPokemon}
            />
          ))}
        </div>
      ) : (
        <p>Nenhum Pokémon salvo ainda!</p>
      )}
    </div>
  );
}

export default PokemonsSalvos;
