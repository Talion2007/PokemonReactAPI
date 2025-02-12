import { useState, useRef } from 'react';
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
    </div>
  )
}

export default App
