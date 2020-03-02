import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const api = "https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/1.json";

export default function App() {
  const [charIndex, setCharIndex] = useState(1);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const loadChar = async () => {};
    loadChar();
  }, []);

  const characterHTML = (
    <div className="card">
      <div className="card-header">
        <h1 className="header-text">Luke Skywalker</h1>
      </div>
      <div className="card-image">
        <img
          className="hero-image"
          src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
          alt="luke skywalker"
        />
      </div>
      <div className="card-footer">
        <p>homeworld: tatooine</p>
        <p>species: human</p>
      </div>
    </div>
  );

  const buttonsHTML = (
    <div className="buttons-container">
      <button>next</button>
    </div>
  );

  return (
    <div className="App">
      {characterHTML}
      {buttonsHTML}
    </div>
  );
}
