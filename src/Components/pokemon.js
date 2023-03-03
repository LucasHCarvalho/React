import Asset from "./asset";

function Pokemon(props){
    return(
        <div>
            <Asset asset={props.asset} />
        </div>
    );
}
          
export default Pokemon;