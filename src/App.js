import "./App.css";
import React from "react";

function App() {
  const [pokemon, setPokemon] = React.useState({});

  function Carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }

  return pokemon.sprites ? (
    <div className="container">
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2">
          {" "}
          <img src={pokemon.sprites.front_default} />{" "}
        </div>
      </div>      
    </div>
  ) : (
    <div>
      {" "}
      <button onClick={Carregar}>Carregar</button>{" "}
    </div>
  );
}

export default App;
