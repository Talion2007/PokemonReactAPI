/* eslint-disable react/prop-types */
import "../styles/DisplayPokemon.css";

function DisplayPokemonSalvo({ pokemon, onExcluir }) {
  const nomePokemon =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <section className="display-pokemon">
      <h1>{nomePokemon}</h1>
      <h1>ID: {pokemon.id}</h1>
      <div>
        <img
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
          loading="lazy"
        />
        <img
          src={pokemon.sprites?.back_default}
          alt={pokemon.name}
          loading="lazy"
        />
      </div>
      <article className="pokemon-info">
        <p>Pontos de Vida: {pokemon.stats[0].base_stat}</p>
        <p>Ataque: {pokemon.stats[1].base_stat}</p>
        <p>Defesa: {pokemon.stats[2].base_stat}</p>
      </article>
      <button className="botao-excluir" onClick={() => onExcluir(pokemon.name)}>
        Excluir
      </button>
    </section>
  );
}

export default DisplayPokemonSalvo;