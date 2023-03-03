import Stats from "./stats";
import Abilits from "./abilits";
import Body from "./body";
import Types from "./types";

function Pokeinfo(props){
    return(
        <div>            
            <Abilits abilits={props.abilits}/>
            <Types types={props.types}/>
            <Body body={props.body}/>
            <Stats stats={props.stats}/>
        </div>
    );
}
          
export default Pokeinfo;