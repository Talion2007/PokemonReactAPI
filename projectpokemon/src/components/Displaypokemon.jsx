function DisplayPokemon ( {pokemonData} ) {
    return (
        <>
        <h1>{pokemonData.name}</h1>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
    )
}

export default DisplayPokemon;