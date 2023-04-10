import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const results = response.data.results;
        const pokemonData = [];

        results.forEach((result) => {
          axios
            .get(result.url)
            .then((response) => {
              pokemonData.push(response.data);
              if (pokemonData.length === results.length) {
                setPokemons(pokemonData);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className='grid'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
