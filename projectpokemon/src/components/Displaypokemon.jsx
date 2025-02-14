/* eslint-disable react/prop-types */
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DisplayPokemon.css";

function DisplayPokemon({ pokemonData }) {
  if (!pokemonData || !pokemonData.name)
    return (
      <section className="display-pokemon">
        <h1>Pokemon não encontrado ou Carregando...</h1>
      </section>
    );

  const namePokemon =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  return (
    <>
      <section className="display-pokemon">
        <h1>{namePokemon}</h1>
        <h1>ID: {pokemonData.id}</h1>
        <div>
          <Carousel interval={5000}>
            <Carousel.Item>
              <img
                src={pokemonData.sprites?.front_default}
                alt={pokemonData.name}
              />
              <img
                src={pokemonData.sprites?.back_default}
                alt={pokemonData.name}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={pokemonData.sprites?.front_shiny}
                alt={pokemonData.name}
              />
              <img
                src={pokemonData.sprites?.back_shiny}
                alt={pokemonData.name}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <article className="pokemon-info">
          <p>Height: {pokemonData.height / 10} meters</p>
          <p>Weight: {pokemonData.weight / 10} kilograms</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>
            Abilities:{" "}
            {pokemonData.abilities
              ?.map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <p>
            Types: {pokemonData.types?.map((type) => type.type.name).join(", ")}{" "}
          </p>
        </article>
      </section>
    </>
  );
}

export default DisplayPokemon;
