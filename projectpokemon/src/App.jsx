import { useState, useRef } from 'react';
import axios from 'axios'

import './App.css'

import DisplayPokemon from './components/Displaypokemon';

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
    <>
    <header className='header'>
        <input ref={inputRef} type='text' placeholder='Search' />
        <button onClick={searchPokemon}>Search</button>
      </header>

      <section>
        <DisplayPokemon pokemonData={pokemonData}/>
      </section>
 
    </>
  )
}

export default App;