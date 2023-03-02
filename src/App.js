import "./App.css";
import React from "react";

let i = 1005;
let tamanho = 1010;

function App() {
  const [pokemon, setPokemon] = React.useState({});

  function Proximo() {
    if(i > tamanho){
      i = 1;
    }
    else{
      i += 1;
    }
    Carregar()
  }

  function Anterior() {
    if(i < 0){
      i = tamanho;
    }
    else{
      i -= 1;
    }
    Carregar()
  }


  function Carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }


  return pokemon.sprites ? (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div
          style={{
            backgroundImage: "url(/pokedex.jpg)",
            backgroundSize: "cover",
            width: '535px',
            height: '400px'
          }}
          class="col-4"
        >
          <img
            style={{
              width: '200px',
              height: '200px',
              marginTop: '100px',
              marginLeft: '10px'
            }}
            src={pokemon.sprites.front_default}
          />
           <button
                onClick={Anterior}
                type="button"
                className="btn btn-primary">Anterior
            </button>
            <button
                onClick={Proximo}
                type="button"
                className="btn btn-primary">Proximo
            </button>
            <h1>{i}</h1>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
  );
}

export default App;
