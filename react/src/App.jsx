import { useState, useRef } from 'react';
import axios from 'axios'

import PokemonDisplay from './components/pokemonDisplay/PokemonDisplay';

import './App.css'

function App() {

    const inputRef = useRef();

    const [pokemonData, setPokemonData] = useState({})

    async function searchPokemon() {
        console.log(inputRef.current.value)
        
        const pokemon = inputRef.current.value.toLowerCase();

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        const data = await axios.get(url)

        setPokemonData(data.data)

    console.log(data)

    }

  return (
    <div>
        <input ref={inputRef} type='text' placeholder='Search' />
        <button onClick={searchPokemon}>Search</button>
        <PokemonDisplay pokemonData={pokemonData} />
    </div>
  )
}

export default App
