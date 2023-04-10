import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
