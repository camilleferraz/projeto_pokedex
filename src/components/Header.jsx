import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt='Pokemon logo' />
      </div>
      <div className='header-buttons'>
        <Link to='/pokedex' className='header-button button'>
          Pokedex
        </Link>
      </div>
    </header>
  );
};

export default Header;
