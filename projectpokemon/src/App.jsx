import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import DisplayPokemon from "./components/Displaypokemon";
import axios from "axios";

import Logo from "./assets/logo.png";

import "./App.css";

function App() {
  const inputRef = useRef();

  const [pokemonData, setPokemonData] = useState({});

  async function searchPokemon() {
    console.log(inputRef.current.value);

    const pokemon = inputRef.current.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const data = await axios.get(url);

    setPokemonData(data.data);

    console.log(data);
  }


  useEffect(() => {
    searchPokemon();
    
  }, []);

  return (
    <>
      <header className="header">
        <img src= {Logo} ></img>
        <div>
          <input ref={inputRef} type="text" placeholder="Pokemon Name or ID" defaultValue={"Bulbasaur"}/>
          <button onClick={searchPokemon}>Search</button>
        </div>
      </header>

        <DisplayPokemon pokemonData={pokemonData} />

        <Analytics/>
    </>
  );
}

export default App;
