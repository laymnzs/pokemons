import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = (props) => {
  console.log(props);

  const evoluirPokemon = (PokemonName) => {
    console.log("Cliquei no botão de evoluir");

    if (PokemonName === "Pichu") {
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        evolved: true,
        weight: 6,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      });
    } else if (PokemonName === "Bulbassauro") {
      props.setPokemon({
        ...props.pokemon,
        name: "Ivysaur",
        evolved: true,
        weight: 6,
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png"
      });
    }
    if (PokemonName === "Squirtle") {
      props.setPokemon({
        ...props.pokemon,
        name: "Blastoise ",
        evolved: true,
        weight: 6,
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png"
      });
    }
  };
  if (PokemonName === "Charmeleon") {
    props.setPokemon({
      ...props.pokemon,
      name: "Charizard",
      evolved: true,
      weight: 6,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
    });
  }

  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;

