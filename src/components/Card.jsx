import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div
      className={`card pokemon-card ${pokemon.types[0].type.name.toLowerCase()}`}
    >
      <div className='card-header'>
        <h3>{pokemon.name}</h3>
      </div>
      <div className='card-body'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='card-buttons'>
        <button>Capturar!</button>
        <Link to={`/pokemon/${pokemon.id}`}>
          <button>Detalhes</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
