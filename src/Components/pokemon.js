import Asset from "./asset";
import Name from "./name";

function Pokemon(props){
    return(
        <div>
            <Asset asset={props.asset} />
            <Name name={props.name}/>
        </div>
    );
}
          
export default Pokemon;