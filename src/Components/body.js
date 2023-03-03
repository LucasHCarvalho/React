function Body(props) {
    return (<div>
            <p style={{fontFamily: 'PokemonSolid', fontSize: '20px' }}>Body:</p>
            <p style={{fontFamily: 'PokemonSolid', fontSize: '20px'}} >{props.body}</p>
        </div>);
}

export default Body;