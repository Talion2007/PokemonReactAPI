import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import axios from "axios";
import DisplayPokemon from "./components/Displaypokemon";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [pokemonData, setPokemonData] = useState({});
  const [erro, setErro] = useState();

  useEffect(() => {
    searchPokemon();
  }, []);

  async function searchPokemon() {
    console.log(inputRef.current.value);
    const pokemon = inputRef.current.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
      const data = await axios.get(url);
      if (data.status !== 404) {
        setErro("OK");
      }
      setPokemonData(data.data);
    } catch (error) {
      console.log("Fetch Status:", error);
      setErro("Error");
    }
  }

  return (
    <>
      <header className="header">
        <img src={Logo} loading="lazy"></img>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Pokemon Name or ID"
            defaultValue={"Bulbasaur"}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchPokemon();
              }
            }}
          />
          <button onClick={searchPokemon}>Search</button>
        </div>
      </header>
      <DisplayPokemon pokemonData={pokemonData} error={erro} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
export default App;