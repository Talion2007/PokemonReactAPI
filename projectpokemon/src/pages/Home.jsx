import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayPokemon from "../components/Displaypokemon";
import Logo from "../assets/logo.png";
import "../App.css";

function Home() {
  const [pokemon, setPokemon] = useState(() => JSON.parse(localStorage.getItem("pokemon")) || "bulbasaur");
  const [dadosPokemon, setDadosPokemon] = useState({});
  const [erro, setErro] = useState();
  const [theme, setTheme] = useState(() => {
    const tema = localStorage.getItem('tema');
    return tema ? JSON.parse(tema) : "white";
  });

  useEffect(() => {
    if (!localStorage.getItem("pokemonsSalvos")) {
      localStorage.setItem("pokemonsSalvos", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setDadosPokemon(data);
        setErro("OK");
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
      } catch {
        setErro("Erro");
      }
    }
    fetchPokemon();
  }, [pokemon]);

  const salvarPokemon = () => {
    const pokemonsSalvos = JSON.parse(localStorage.getItem("pokemonsSalvos"));
    if (dadosPokemon?.name && !pokemonsSalvos.some((p) => p.name === dadosPokemon.name)) {
      pokemonsSalvos.push(dadosPokemon);
      localStorage.setItem("pokemonsSalvos", JSON.stringify(pokemonsSalvos));
      alert(`${dadosPokemon.name} foi salvo!`);
    } else {
      alert(dadosPokemon?.name ? `${dadosPokemon.name} já está salvo!` : "Nenhum Pokémon para salvar!");
    }
  };

  const alternarTema = () => {
    const novoTema = tema === "claro" ? "escuro" : "claro";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  };

  return (
    <div className={`main ${tema}`}>
      <header className="header">
        <img src={Logo} alt="Logo Pokémon" loading="lazy" />
        <div>
          <button>
            <Link to="/salvos">Pokémons Salvos</Link>
          </button>
          <input onChange={(e) => setPokemon(e.target.value)} placeholder={pokemon} />
          <button onClick={() => setPokemon(pokemon)}>Buscar</button>
          <button onClick={salvarPokemon}>Salvar</button>
          <button onClick={alternarTema}>Tema: {tema === "claro" ? "Escuro" : "Claro"}</button>
        </div>
      </header>
      <DisplayPokemon pokemonData={dadosPokemon} error={erro} />
    </div>
  );
}

export default Home;
