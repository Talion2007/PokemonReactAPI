import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Para fazer requisições HTTP
import DisplayPokemon from "../components/Displaypokemon"; // Componente para exibir o Pokémon
import Logo from "../assets/logo.png"; // Logo do projeto
import "../App.css"; // Estilo do aplicativo

function Home() {
  // Estado para armazenar o nome do Pokémon buscado (inicia com valor salvo no localStorage ou "bulbasaur")
  const [pokemon, setPokemon] = useState(() => JSON.parse(localStorage.getItem("pokemon")) || "bulbasaur");

  // Estado que armazena os dados do Pokémon buscado
  const [dadosPokemon, setDadosPokemon] = useState({});

  // Estado para indicar se houve erro na busca
  const [erro, setErro] = useState();

  // Estado para o tema escuro/claro, com valor salvo no localStorage
  const [theme, setTheme] = useState(() => {
    const temaSalvo = localStorage.getItem('tema');
    return temaSalvo ? JSON.parse(temaSalvo) : true; // Se não houver tema salvo, usa 'true' como padrão
  });

  // useEffect que garante que o localStorage tenha um array de pokémons salvos
  useEffect(() => {
    if (!localStorage.getItem("pokemonsSalvos")) {
      localStorage.setItem("pokemonsSalvos", JSON.stringify([]));
    }
  }, []);

  // useEffect que busca os dados do Pokémon sempre que o valor de "pokemon" mudar
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setDadosPokemon(data); // Armazena os dados no estado
        setErro("OK"); // Marca que deu certo
        localStorage.setItem("pokemon", JSON.stringify(pokemon)); // Salva o nome do último Pokémon buscado
      } catch {
        setErro("Erro"); // Se der erro, marca o estado
      }
    }
    fetchPokemon(); // Executa a função ao carregar ou mudar o valor de "pokemon"
  }, [pokemon]);

  // Função para salvar o Pokémon atual no localStorage
  const salvarPokemon = () => {
    const pokemonsSalvos = JSON.parse(localStorage.getItem("pokemonsSalvos"));

    // Verifica se o Pokémon já foi salvo antes
    if (dadosPokemon?.name && !pokemonsSalvos.some((p) => p.name === dadosPokemon.name)) {
      pokemonsSalvos.push(dadosPokemon); // Adiciona aos salvos
      localStorage.setItem("pokemonsSalvos", JSON.stringify(pokemonsSalvos)); // Salva no localStorage
      alert(`${dadosPokemon.name} foi salvo!`);
    } else {
      alert(dadosPokemon?.name ? `${dadosPokemon.name} já está salvo!` : "Nenhum Pokémon para salvar!");
    }
  };

  // Função que alterna o tema claro/escuro
  function alternarTema() {
    setTheme(!theme); // Altera o estado
    localStorage.setItem('tema', JSON.stringify(!theme)); // Salva no localStorage
  }

  return (
    <div className={`main ${theme}`}>
      <header className="header">
        <img src={Logo} alt="Logo Pokémon" loading="lazy" />
        <div>
          {/* Link para a página de Pokémons salvos */}
          <button>
            <Link to="/salvos">Pokémons Salvos</Link>
          </button>

          {/* Input para digitar o nome do Pokémon */}
          <input onChange={(e) => setPokemon(e.target.value)} placeholder={pokemon} />

          {/* Botão para salvar o Pokémon */}
          <button onClick={salvarPokemon}>Salvar Pokemon</button>

          {/* Botão para buscar novamente o mesmo Pokémon */}
          <button onClick={() => setPokemon(pokemon)}>Buscar</button>

          {/* Botão para alternar o tema */}
          <button onClick={alternarTema}>Alterar tema</button>
        </div>
      </header>

      {/* Componente que exibe os dados do Pokémon */}
      <DisplayPokemon pokemonData={dadosPokemon} error={erro} />
    </div>
  );
}

export default Home;