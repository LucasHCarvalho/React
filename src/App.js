import "./App.css";
import Pokemon from "./Components/pokemon";
import Pokeinfo from "./Components/pokeinfo";
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
        <div className="col-6"></div>
        <div
          style={{
            backgroundImage: "url(/pokedex.jpg)",
            backgroundSize: "cover",
            marginLeft: '280px',
            width: '935px',
            height: '700px'
          }}
          className="col-6"
        >
          <div>
            <Pokemon 
              asset={pokemon.sprites.front_default}
              name={pokemon.id + ' - ' + pokemon.name}>
            </Pokemon>
            <div 
              style={{
                marginLeft: '500px',
                marginTop: '-330px',
                textAlign: 'center'
              }}
            >
              <Pokeinfo
                abilits={pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                types={pokemon.types.map((type) => type.type.name).join(', ')}
                body={'height: ' + pokemon.height + 'm weight: ' + pokemon.weight + 'kg'}
                stats={pokemon.stats.map((st, i) => {
                  if (i < 3)
                    return (<span>{st.stat.name}: {st.base_stat} </span>);
                })}>              
              </Pokeinfo>
              
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
    </div>
  ) : (
    <div>
      <button onClick={Carregar}>Carregar</button>
    </div>
  );
}

export default App;