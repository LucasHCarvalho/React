function Types(props) {

    return <div>
            <p style={{fontFamily: 'PokemonSolid', fontSize: '20px' }}>Types:</p>
            <p style={{fontFamily: 'PokemonSolid', marginLeft: '30px', marginTop: '30px', fontSize: '20px' }}>{props.types}</p>
        </div>;
}

export default Types;