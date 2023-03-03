import "./App.css";
import Pokemon from "./Components/pokemon";
import React from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs';



let i = 1;
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
          className="col-4"
        >
          <div >
            <Pokemon 
             asset={pokemon.sprites.front_default}>
            </Pokemon>
          </div>        
        </div>
        <div className="row">
            <div className="col-7"></div>
            <div className="col-2"
               style={{
                marginTop: '-80px'
              }}
            >
                <BsArrowLeftCircleFill 
                      onClick={Anterior}
                      type="button"
                      className="btn left">Anterior
                  </BsArrowLeftCircleFill>
                  <BsArrowRightCircleFill
                      onClick={Proximo}
                      type="button"
                      className="btn right">Proximo
                </BsArrowRightCircleFill>
          </div>  
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
