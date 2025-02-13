/* eslint-disable react/prop-types */
function PokemonDisplay ({pokemonData}) {

return (
    <div>
        <p>{pokemonData.name}</p>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
)

}

export default PokemonDisplay;