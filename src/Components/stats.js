function Stats(props) {
    return (<div>
                <p style={{fontFamily: 'PokemonSolid', fontSize: '20px' }}>Stats:</p>
                <p style={{fontFamily: 'PokemonSolid', fontSize: '20px' }}>{props.stats}</p>
            </div>);
}

export default Stats;