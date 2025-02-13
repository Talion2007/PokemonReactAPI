import "../styles/DisplayPokemon.css";
function DisplayPokemon ( {pokemonData} ) {
    return (
        <>
        <section className="display-pokemon">
        <h1>{pokemonData.name}</h1>
        <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} />
        </section>
        </>
    )
}

export default DisplayPokemon;