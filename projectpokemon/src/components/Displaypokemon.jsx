import "../styles/DisplayPokemon.css";

function DisplayPokemon({ pokemonData, error }) {
  if (!pokemonData || !pokemonData.name)
    return (
      <section className="display-pokemon error">
        <h1>Pokemon não encontrado...</h1>
      </section>
    );
  if (error !== "OK") {
    return (
      <section className="display-pokemon error">
        <h1>Pokemon não encontrado...</h1>
      </section>
    );
  }
  const namePokemon =
  pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  return (
    <>
      <section className="display-pokemon">
        <h1>{namePokemon}</h1>
        <h1>ID: {pokemonData.id}</h1>
        <div>
          
              <img
                src={pokemonData.sprites?.front_default}
                alt={pokemonData.name}
                loading="lazy"
              />
              <img
                src={pokemonData.sprites?.back_default}
                alt={pokemonData.name}
                loading="lazy"
              />
            
              <img
                src={pokemonData.sprites?.front_shiny}
                alt={pokemonData.name}
                loading="lazy"
              />
              <img
                src={pokemonData.sprites?.back_shiny}
                alt={pokemonData.name}
                loading="lazy"
              />
            
        </div>
        <article className="pokemon-info">
          <p>Health Points: {pokemonData.stats[0].base_stat}</p>
          <p>Attack: {pokemonData.stats[1].base_stat}</p>
          <p>Defense: {pokemonData.stats[2].base_stat}</p>
          <p>Special Attack: {pokemonData.stats[3].base_stat}</p>
          <p>Special Defense: {pokemonData.stats[4].base_stat}</p>
          <p>Speed: {pokemonData.stats[5].base_stat}</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>Height: {pokemonData.height / 10} meters</p>
          <p>Weight: {pokemonData.weight / 10} kilograms</p>
          <p>
            Abilities:{" "}
            {pokemonData.abilities
              ?.map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <p>
            Types: {pokemonData.types?.map((type) => type.type.name).join(", ")}{" "}
          </p>
          <p>
            Moves: {pokemonData.moves?.map((move) => move.move.name).join(", ")}{" "}
          </p>
        </article>
      </section>
    </>
  );
}
export default DisplayPokemon;