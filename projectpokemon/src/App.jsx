import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonsSalvos from "./pages/SavedPokemons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salvos" element={<PokemonsSalvos />} />
      </Routes>
    </Router>
  );
}

export default App;