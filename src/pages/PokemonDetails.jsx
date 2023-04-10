import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, sprites, stats, types, moves } = pokemon;
  const frontImage = sprites.front_default;
  const backImage = sprites.back_default;

  return (
    <div
      className={`pokemon-details pokemon-card ${pokemon.types[0].type.name.toLowerCase()}`}
    >
      <div className='pokemon-details-header'>
        <h1 className='pokemon-details-name'>{name}</h1>
        <p className='pokemon-details-id'>#{id}</p>
      </div>
      <div className='pokemon-details-body'>
        <div className='pokemon-details-images'>
          <img src={frontImage} alt={name} />
          <img src={backImage} alt={name} />
        </div>
        <div className='pokemon-details-info'>
          <div className='pokemon-details-stats'>
            <h2>Stats</h2>
            <ul>
              {stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className='pokemon-details-types'>
            <h2>Types</h2>
            <ul>
              {types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div className='pokemon-details-moves'>
            <h2>Moves</h2>
            <ul>
              {moves.slice(0, 5).map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
