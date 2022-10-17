import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0
  });

  const [pokemon1, setPokemon1] = useState({
    name: "Bulbassauro",
    type: "Plant",
    evolved: false,
    weight: 3,
    color: "green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    id: 0
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: true,
    weight: 4,
    color: "#add8e6",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    id: 0
  });

  const [pokemon3, setPokemon3] = useState({
    name: "Charmeleon",
    type: "Fire",
    evolved: true,
    weight: 4,
    color: "#ff6961",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    id: 0
  });

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} />
        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} />
        <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2} />
        <PokemonCard pokemon={pokemon3} setPokemon={setPokemon3} />

        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
