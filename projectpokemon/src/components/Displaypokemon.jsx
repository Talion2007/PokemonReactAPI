import "../styles/DisplayPokemon.css";
function DisplayPokemon ( {pokemonData} ) {
    return (
        <>
        <section className="display-pokemon">
        <h1>{pokemonData.name}</h1>
        <div>
        <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} />
        <img src={pokemonData.sprites?.back_default} alt={pokemonData.name} />
        </div>

        <article className="pokemon-info">
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Base Experience: {pokemonData.base_experience}</p>
            <p>Abilities: {pokemonData.abilities?.map(ability => ability.ability.name).join(", ")}</p>
        </article>

        </section>
        </>
    )
}

export default DisplayPokemon;